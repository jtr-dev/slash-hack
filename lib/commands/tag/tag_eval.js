"use strict";

const Yna = require("ynajs");
const createCtx = require("./lib/createCtx");
const bindDiscordCommands = require("./lib/bindDiscordCommands");

module.exports = function (args, msg, app, cliLookup) {
    const me = msg.member;
    const argsArr = Array.from(cliLookup.commandPathRemains).slice(1);
    const tagInstance = new Yna(args.yna);
    const ctx = createCtx(msg, me,"None");
    let result;

    bindDiscordCommands(tagInstance, msg, app);
    result = tagInstance.run(argsArr, ctx);

    return result;
};
