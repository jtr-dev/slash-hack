"use strict";

const Yna = require("ynajs");
const createCtx = require("./lib/createCtx");
const bindDiscordCommands = require("./lib/bindDiscordCommands");

module.exports = function (args, msg, app, cliLookup) {
    const me = msg.member;
    const yna = args.yna;
    const argsArr = Array.from(cliLookup.commandPathRemains).slice(1);
    const tagInstance = new Yna(yna);
    const ctx = createCtx(msg, me, "anonymous");
    let result;

    bindDiscordCommands(tagInstance, msg, app);
    result = tagInstance.run(argsArr, ctx);

    return result;
};
