"use strict";

const string = require("../../strings.js");
const audioPlay = require("../../bot/audioPlay");

module.exports = function (bot, msg) {
    const assets = bot._instance.voice.assets;
    const name = assets[Math.floor(Math.random() * assets.length)];
    let result = true;

    result = audioPlay(bot, msg, name);

    return result ? `Playing Meme: '${name.replace(".mp3","")}'` : string.errorInternal;
};
