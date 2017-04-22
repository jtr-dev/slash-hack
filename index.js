"use strict";

const Dingy = require("di-ngy");
const config = require("./config.json");
const strings = require("./strings.json");

const commands = require("./lib/commands");
const onInit = require("./lib/events/onInit");
const onConnect = require("./lib/events/onConnect");
const onMessage = require("./lib/events/onMessage");

const bot = new Dingy(config, commands, strings, {
    onInit,
    onConnect,
    onMessage
});

bot.connect();
