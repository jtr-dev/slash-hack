"use strict";

const cfg = require("../../config.json");
const strings = require("../strings");
const arrayToText = require("./arrayToText");
const filterByRole = require("./filterByRole");

const errorInternal = function () {
    return {
        type: "error",
        content: strings.errorInternal
    };
};
const errorMissingCommand = function (cli, msg, data) {
    const similar = filterByRole(msg, cli, data.similar);
    const similarString = similar.length > 0 ? ` Did you mean ${arrayToText(similar)}?` : "";

    return {
        type: "error",
        content: `${strings.errorUnknownCommand} '${data.missing}'.${similarString}`
    };
};

module.exports = function (bot, msg) {
    const cli = bot._instance.cli;
    const inputString = msg.content.substr(cfg.prefix.length).trim();
    const inputResult = cli.parse(inputString);

    if (inputResult.success) {
        const targetCommand = inputResult.command;

        if (!targetCommand.admin || cfg.adminIds.includes(msg.author.id)) { //Checks if admin is required
            let targetCommandResult;

            if (inputResult.caller === "help") {//special case
                const helpCommand = inputResult.args.command;
                const helpResult = helpCommand ? cli.getCommand(helpCommand) : cli.getAll();

                if (helpResult) {
                    targetCommandResult = targetCommand.fn(bot, msg, helpResult, Boolean(helpCommand));
                } else {
                    return errorMissingCommand(cli, msg, helpResult);
                }
            } else {
                targetCommandResult = targetCommand.fn(bot, msg, inputResult.args);
            }

            if (typeof targetCommandResult === "string") { //Checks if a string was returned (Text command)
                return {
                    type: targetCommand.outputType,
                    content: targetCommandResult
                };
            } else {
                return errorInternal();
            }
        }
    } else { //Else give back an error
        const errData = inputResult.error;

        if (errData.type === "missingCommand") {
            return errorMissingCommand(cli, msg, errData);
        } else if (errData.type === "missingArg") {
            return {
                type: "error",
                content: `${strings.errorMissingArgument} '${errData.missing[0].name}'`
            };
        } else {
            return errorInternal();
        }
    }
};
