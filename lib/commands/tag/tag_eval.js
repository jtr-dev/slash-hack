"use strict";

const Yna = require("ynajs");
const createCtx = require("./lib/createCtx");

module.exports = function (args, msg, app, cliLookup) {
    const tag = new Yna(args.yna, {
        name: "eval"
    });
    const argsArr = Array.from(cliLookup.commandPathRemains).slice(1);
    const ctx = createCtx(msg, app);
    const result = tag.run(argsArr, ctx);

    return result;
};
