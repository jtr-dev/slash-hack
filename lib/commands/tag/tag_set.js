"use strict";

const Yna = require("ynajs");

module.exports = function (bot, msg, args) {
    const tagStorage = bot._instance.tags;
    const tag = new Yna(args.yna, {
        name: args.key
    });

    tagStorage.set(args.key, tag);

    return "Success!";
};
