"use strict";

const Yna = require("ynajs");
const dummyMember = require("./lib/dummyMember");
const createCtx = require("./lib/createCtx");
const user = require("./lib/commands/user");
const member = require("./lib/commands/member");
const nameof = require("./lib/commands/nameof");

module.exports = function (args, msg, app, cliLookup) {
    const tagStorage = app.storage.tag_storage;
    const tag = tagStorage.getKey(args.key);

    if (tag) {
        const argsArr = Array.from(cliLookup.commandPathRemains).slice(1);
        const me = msg.guild.member(tag.creator) || dummyMember();
        const tagInstance = new Yna(tag.content, {
            fromJSON: true
        });
        const ctx = createCtx(msg, me);
        let result;

        tagInstance.addCommand("user", user(app, msg));
        tagInstance.addCommand("member", member(app, msg));
        tagInstance.addCommand("nameof", nameof(app, msg));

        result = tagInstance.run(argsArr, ctx);

        return result;
    } else {
        return `Tag '${args.key}' not found.`;
    }
};
