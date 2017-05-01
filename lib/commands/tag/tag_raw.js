"use strict";

module.exports = function (args, msg, app) {
    console.log(args,msg,app);
    const tagStorage = app.storage.tag_storage;
    const tag = tagStorage.getKey(args.key);

    if (tag) {
        return tag.raw || "";
    } else {
        return `Tag '${args.key}' not found.`;
    }
};
