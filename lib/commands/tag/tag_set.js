"use strict";

const Yna = require("ynajs");
const convertMember = require("./lib/convertMember");

module.exports = function (args, msg, app) {
    const me = convertMember(msg.member);
    const tagIndex = app.storage.tag_index;
    const tagStorage = app.storage.tag_storage;
    const keyLower = args.key.substr(0, 1).toLowerCase();
    let keyList = tagIndex.getKey(keyLower) || [];

    const tag = new Yna(args.yna);

    if (!keyList.includes(args.key)) {
        keyList.push(args.key);
        keyList = keyList.sort();
    }

    tagStorage.setKey(args.key, {
        me,
        content: tag.tree
    });
    tagStorage.save(true);

    tagIndex.setKey(keyLower, keyList);
    tagIndex.save(true);

    return "Success!";
};
