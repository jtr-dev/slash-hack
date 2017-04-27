"use strict";

const Yna = require("ynajs");
const convertMember = require("./lib/convertMember");
const createCtx = require("./lib/createCtx");

module.exports = function (args, msg, app, cliLookup) {
    const me = convertMember(msg.member);
    const tag = new Yna(args.yna, {
        name: "eval"
    });
    const argsArr = Array.from(cliLookup.commandPathRemains).slice(1);
    const ctx = createCtx(msg, me);
    const result = tag.run(argsArr, ctx);

    return result;
};
