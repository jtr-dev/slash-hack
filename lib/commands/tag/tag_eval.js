"use strict";

const Yna = require("ynajs");
const convertMember = require("./lib/convertMember");
const createCtx = require("./lib/createCtx");
const user = require("./lib/commands/user");
const member = require("./lib/commands/member");
const nameof = require("./lib/commands/nameof");

module.exports = function (args, msg, app, cliLookup) {
    const me = convertMember(msg.member);
    const tag = new Yna(args.yna);
    const argsArr = Array.from(cliLookup.commandPathRemains).slice(1);
    const ctx = createCtx(msg, me);
    let result;

    tag.addCommand("user", user(app, msg));
    tag.addCommand("member", member(app, msg));
    tag.addCommand("nameof", nameof(app, msg));

    result = tag.run(argsArr, ctx);

    return result;
};
