"use strict";

const string = require("../../strings.js");
const audioPlay = require("../../bot/audioPlay");

module.exports = function (bot, msg) {
    const result = audioPlay(bot, msg, "bombdef.mp3");

    return result ? "Playing defuse meme." : string.infoInternal;
};
