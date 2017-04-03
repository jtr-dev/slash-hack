"use strict";

const botKill = require("../bot/botKill");

module.exports = function (bot) {
    botKill(bot);

    return "Shutting down...";
};
