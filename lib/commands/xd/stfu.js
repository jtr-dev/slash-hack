"use strict";

const audioStop = require("../../bot/audioStop");

module.exports = function (bot) {
    const result = audioStop(bot);

    return result ? "Stopping audio..." : "No Audio playing ._.";
};
