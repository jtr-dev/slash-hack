"use strict";

const Yna = require("ynajs");

module.exports = function (args, msg, app) {
    const tagStorage = app.data.tags;
    const tag = new Yna(args.yna, {
        name: args.key
    });

    tagStorage.set(args.key, tag);

    return "Success!";
};
