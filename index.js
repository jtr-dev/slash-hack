"use strict";

const http = require("http");
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
    website: "https://github.com/FelixRilling/lisa-bot",
    files: {
        data: {
            dir: "./data/",
            log: "bot",
            storage: [
                "lisa",
                "tag_storage",
                "tictactoe"
            ]
        },
        assets: "./data/assets/"
    },
    options: {
        enableDefaultCommands: true,
        commandsAreCaseSensitive: false,
        answerToMissingComman: false,
        answerToMissingArgs: false,
        answerToMissingPerms: false
    }
};

const bot = new Dingy(config, commands, strings, {
    onInit,
    onConnect,
    onMessage
});

//Spoof server for heroku
http.createServer(() => "Bot running").listen(process.env.PORT || 6000);

bot.connect();
