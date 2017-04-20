"use strict";

const Yna = require("ynajs");

module.exports = function (args, msg, app) {
    const tagIndex = app.storage.tag_index;
    const tagStorage = app.storage.tag_storage;
    const argsArr = [args.arg1, args.arg2, args.arg3];
    const keyLower = args.key.substr(0, 1).toLowerCase();
    let keyList = tagIndex.getKey(keyLower);

    if (keyList.includes(args.key)) {
        const tagContent = tagStorage.getKey(args.key);
        const tag = new Yna(tagContent, {
            name: args.key
        }, {
            parser: {
                fromJSON: true
            }
        });

        const result = tag.run(argsArr, [], {});

        return result;
    } else {
        return "Not found...";
    }
};
