"use strict";

const fs = require("fs");
const Discord = require("discord.js");
//const flatCache = require("flat-cache");
const Log = require("log");

const cfg = require("./config.json");
const strings = require("./lib/strings");
const executeCommand = require("./lib/bot/executeCommand");

const logStream = fs.createWriteStream("./data/bot.log");
const bot = new Discord.Client();
const log = new Log("debug", logStream);

//Setup bot data storage

//Setup bot data storage
bot._instance = {
    log,
    voice: {
        playing: false,
        channel: null,
        dispatcher: null
    }
};

//Inits onMessage function
bot.on("message", msg => {
    /**
     * Command proccessor
     */
    if (!msg.author.bot && msg.content.substr(0, cfg.prefix.length) === cfg.prefix) {
        const commandResult = executeCommand(bot, msg);

        if (commandResult.type === "text") {
            msg.channel.sendMessage(commandResult.content);
        } else if (commandResult.type === "code" || commandResult.type === "error") {
            msg.channel.sendCode("text", commandResult.content);
        } else {
            throw new Error("Malformed result", commandResult);
        }
    }

});


//Start bot when files are loaded
bot.login(cfg.token)
    .then(() => {
        bot.user.setGame(strings.botStatus);
        log.info(`${cfg.name} is running...`);
    })
    .catch(err => {
        log.error("An error occured connecting to the discord API", err);
    });
