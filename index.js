"use strict";

const Dingy = require("di-ngy");
const commands = require("./lib/commands");
const onInit = require("./lib/events/onInit");
const onConnect = require("./lib/events/onConnect");
const onMessage = require("./lib/events/onMessage");

const config = {
    name: "lisa-bot",
    prefix: "$",
    token: process.env.DISCORD_KEY,
    adminIds: [
        "128985967875850240"
    ],
    files: {
        data: {
            dir: "./data/",
            storage: [
                "lisa",
                "tag_storage",
                "tictactoe"
            ]
        }
    },
    options: {
        enableDefaultCommands: true,
        commandsAreCaseSensitive: true,

        answerToMissingCommand: false,
        answerToMissingArgs: false,
        answerToMissingPerms: false,

        sendFilesForLongReply: true,

        logLevel: "debug"
    }
};

const bot = new Dingy(config, commands, {}, {
    onInit,
    onConnect,
    onMessage
});

bot.connect();
