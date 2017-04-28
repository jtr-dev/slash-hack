"use strict";

const Yna = require("ynajs");

module.exports = function (args, msg, app) {
    const tagStorage = app.storage.tag_storage;
    const tag = new Yna(args.yna);

    tagStorage.setKey(args.key, {
        creator: msg.member.id,
        content: tag.tree
    });
    tagStorage.save(true);

    return `Tag '${args.key}' was saved.`;
};
