"use strict";

const Yna = require("ynajs");
const reservedKeys = ["create", "eval", "yna", "owner", "raw"];

module.exports = function (args, msg, app) {
    const tagStorage = app.storage.tag_storage;

    if (reservedKeys.includes(args.key)) {
        return "You can't save a tag under this name";
    } else {
        const tagInstance = new Yna(args.yna);

        tagStorage.setKey(args.key, {
            creator: msg.member.id,
            raw: args.yna,
            content: tagInstance.tree
        });
        tagStorage.save(true);

        return `Tag '${args.key}' was saved.`;
    }
};
