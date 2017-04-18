"use strict";

const Dingy = require("di-ngy");
const config = require("./config.json");
const commands = require("./lib/commands");
const onInit = function (app) {
     console.log(app.data);
};
const onConnect = function () {
    console.log("Bot is running");
};

const bot = new Dingy(config, commands, {}, { onInit, onConnect });

bot.connect();
