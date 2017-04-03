"use strict";

const Clingy = require("cli-ngy");

const cfg = require("../../config.json");
const strings = require("../strings");
const commands = require("../commands");
const arrayToText = require("./arrayToText");
const filterByRole = require("./filterByRole");

const cli = new Clingy(commands);

const errorInternal = function () {
    return {
        type: "error",
        content: strings.errorInternal
    };
};
const errorMissingCommand = function (msg, data) {
    const similar = filterByRole(msg, cli, data.similar);
    const similarString = similar.length > 0 ? ` Did you mean ${arrayToText(similar)}?` : "";

    return {
        type: "error",
        content: `${strings.errorUnknownCommand} '${data.missing}'.${similarString}`
    };
};

module.exports = function (bot, msg) {
    const text = msg.content;
    const inputString = text.substr(cfg.prefix.length);
    const inputResult = cli.parse(inputString);



    if (inputResult.success) {
        const targetCommand = inputResult.command;

        if (!targetCommand.admin || cfg.adminIds.includes(msg.author.id)) { //Checks if admin is required
            let targetCommandResult;


            if (inputResult.caller === "help") {
                const helpCommand = inputResult.args.command;
                const helpResult = helpCommand ? cli.getCommand(helpCommand) : cli.getAll();

                if (helpResult) {
                    targetCommandResult = targetCommand.fn(bot, msg, helpResult, Boolean(helpCommand));
                } else {
                    return errorMissingCommand(msg, helpResult);
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
            return errorMissingCommand(msg, errData);
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
