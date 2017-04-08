"use strict";

const string = require("../../strings.js");
const audioPlay = require("../../bot/audioPlay");

module.exports = function (bot, msg) {
    const result = audioPlay(bot, msg, "nicememe.mp3");

    return result ? "Playing nice memes." : string.infoInternal;
};
