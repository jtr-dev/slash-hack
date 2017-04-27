"use strict";

const Yna = require("ynajs");
const createCtx = require("./lib/createCtx");
const user = require("./lib/commands/user");
const nameof = require("./lib/commands/nameof");

module.exports = function (args, msg, app, cliLookup) {
    const argsArr = Array.from(cliLookup.commandPathRemains).slice(1);
    const tagIndex = app.storage.tag_index;
    const tagStorage = app.storage.tag_storage;
    const keyLower = args.key.substr(0, 1).toLowerCase();
    let keyList = tagIndex.getKey(keyLower);

    if (keyList && keyList.includes(args.key)) {
        const tagContent = tagStorage.getKey(args.key);
        const tag = new Yna(tagContent.content, {
            fromJSON: true
        });
        const ctx = createCtx(msg, tagContent.me);
        let result;

        tag.addCommand("user", user(app, msg));
        tag.addCommand("nameof", nameof(app, msg));

        result = tag.run(argsArr, ctx);

        return result;
    } else {
        return "Command not found.";
    }
};
