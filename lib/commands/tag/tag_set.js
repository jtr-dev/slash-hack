"use strict";

const Yna = require("ynajs");

module.exports = function (args, msg, app) {
    const tagIndex = app.storage.tag_index;
    const tagStorage = app.storage.tag_storage;
    const keyLower = args.key.substr(0, 1).toLowerCase();
    let keyList = tagIndex.getKey(keyLower) || [];

    const tag = new Yna(args.yna, {
        name: args.key
    });

    if (!keyList.includes(args.key)) {
        keyList.push(args.key);
        keyList = keyList.sort();
    }

    tagStorage.setKey(args.key, tag.tree);
    tagStorage.save(true);

    tagIndex.setKey(keyLower, keyList);
    tagIndex.save(true);

    return "Success!";
};
