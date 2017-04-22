"use strict";

const Yna = require("ynajs");
const createCtx = require("./lib/createCtx");

module.exports = function (args, msg, app, cliLookup) {
    const argsArr = Array.from(cliLookup.commandPathRemains).slice(1);
    const tagIndex = app.storage.tag_index;
    const tagStorage = app.storage.tag_storage;
    const keyLower = args.key.substr(0, 1).toLowerCase();
    let keyList = tagIndex.getKey(keyLower);

    if (keyList && keyList.includes(args.key)) {
        const tagContent = tagStorage.getKey(args.key);
        const tag = new Yna(tagContent, {
            name: args.key
        }, {
            parser: {
                fromJSON: true
            }
        });
        const ctx = createCtx(msg, app);
        const result = tag.run(argsArr, ctx);

        return result;
    } else {
        return "Not found...";
    }
};
