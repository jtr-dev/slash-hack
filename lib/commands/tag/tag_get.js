"use strict";

const Yna = require("ynajs");
const createCtx = require("./lib/createCtx");
const bindDiscordCommands = require("./lib/bindDiscordCommands");
const resolveUserId = require("./lib/resolveUserId");

module.exports = function (args, msg, app, cliLookup) {
    const tagStorage = app.storage.tag_storage;
    const tag = tagStorage.getKey(args.key);

    if (tag) {
        const argsArr = Array.from(cliLookup.commandPathRemains).slice(1);
        const me = resolveUserId(tag.creator, msg);
        const tagInstance = new Yna(tag.content, {
            fromJSON: true
        });
        const ctx = createCtx(msg, me);
        let result;

        bindDiscordCommands(tagInstance, msg, app);
        result = tagInstance.run(argsArr, ctx);

        return result;
    } else {
        return `Tag '${args.key}' not found.`;
    }
};
