"use strict";

const Yna = require("ynajs");
const createCtx = require("./lib/createCtx");
const user = require("./lib/commands/user");
const member = require("./lib/commands/member");
const nameof = require("./lib/commands/nameof");

module.exports = function (args, msg, app, cliLookup) {
    const tagStorage = app.storage.tag_storage;
    const tagContent = tagStorage.getKey(args.key);

    if (tagContent) {
        const argsArr = Array.from(cliLookup.commandPathRemains).slice(1);
        const me = msg.guild.member(tagContent.creator);
        const tag = new Yna(tagContent.content, {
            fromJSON: true
        });
        const ctx = createCtx(msg, me);
        let result;

        tag.addCommand("user", user(app, msg));
        tag.addCommand("member", member(app, msg));
        tag.addCommand("nameof", nameof(app, msg));

        result = tag.run(argsArr, ctx);

        return result;
    } else {
        return `Tag '${args.key}' not found.`;
    }
};
