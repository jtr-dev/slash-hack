"use strict";

const fs = require("fs");
const string = require("../strings.js");
const audioPlay = require("../bot/audioPlay");
const assetDir = require("../constants").assetDir;

module.exports = function (bot, msg) {
    const assets = fs.readdirSync(assetDir);
    const name = assets[Math.floor(Math.random() * assets.length)];
    let result = false;

    result = audioPlay(bot, msg, name);

    return result ? `Playing Meme: '${name}'` : string.infoInternal;
};
