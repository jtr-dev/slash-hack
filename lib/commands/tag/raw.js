"use strict";

module.exports = function (args, msg, app) {
    const tagStorage = app.storage.tag_storage;
    const tag = tagStorage.getKey(args.key);

    if (tag) {
        return [tag.raw, "yna"];
    } else {
        return `Tag '${args.key}' not found.`;
    }
};
