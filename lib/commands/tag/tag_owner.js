"use strict";

const resolveUserId = require("./lib/resolveUserId");
const toFullName = require("./lib/toFullName");

module.exports = function (args, msg, app) {
    const tagStorage = app.storage.tag_storage;
    const tag = tagStorage.getKey(args.key);

    if (tag) {
        const me = resolveUserId(tag.creator, msg);

        return toFullName(me.user);
    } else {
        return `Tag '${args.key}' not found.`;
    }
};
