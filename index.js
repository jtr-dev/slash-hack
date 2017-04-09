"use strict";

const fs = require("fs");
const Log = require("log");
const Clingy = require("cli-ngy");
const Discord = require("discord.js");

const cfg = require("./config.json");
const strings = require("./lib/strings");
const commands = require("./lib/commands");
const assetsDir = require("./lib/constants").assetsDir;
const executeCommand = require("./lib/bot/executeCommand");

const logStream = fs.createWriteStream("./data/bot.log");
const log = new Log("debug", logStream);
const cli = new Clingy(commands);
const bot = new Discord.Client();

//Setup bot data storage
bot._instance = {
    log,
    cli,
    voice: {
        playing: false,
        channel: null,
        connection: null,
        dispatcher: null,
        assets: fs.readdirSync(assetsDir),
    },
    tags: new Map()
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
