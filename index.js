"use strict";

const Dingy = require("di-ngy");
const config = require("./config.json");
const commands = require("./lib/commands");
const onMessage = require("./lib/events/onMessage");
const onConnect = require("./lib/events/onConnect");

const bot = new Dingy(config, commands, {}, {
    onMessage,
    onConnect
});

bot.connect();
