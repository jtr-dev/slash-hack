"use strict";

const Yna = require("ynajs");

module.exports = function (bot, msg, args) {
    const tag = new Yna("eval", args.yna, {});
    const argsArr = [args.arg1, args.arg2, args.arg3];
    const result = tag.run(argsArr, [], {});

    return result;
};
