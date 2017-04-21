"use strict";

const Yna = require("ynajs");

module.exports = function (args, msg, app, cliLookup) {
    const tag = new Yna(args.yna, {
        name: "eval"
    });
    const argsArr = Array.from(cliLookup.commandPathRemains).slice(1);
    const result = tag.run(argsArr, {});

    return result;
};
