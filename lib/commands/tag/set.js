"use strict";

const Yna = require("ynajs");
const reservedKeys = ["create", "eval", "yna", "owner", "raw"];

module.exports = function (args, msg, app) {
    const tagStorage = app.storage.tag_storage;

    console.log(args.yna);

    if (reservedKeys.includes(args.key)) {
        return "You can't save a tag under this name";
    } else {
        const me = msg.member;
        const tagInstance = new Yna(args.yna);

        tagStorage.setKey(args.key, {
            creator: me.user.id,
            raw: args.yna,
            content: tagInstance.tree
        });
        tagStorage.save(true);

        return `Tag '${args.key}' was saved.`;
    }
};
