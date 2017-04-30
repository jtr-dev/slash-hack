"use strict";

const dummyMember = require("./lib/dummyMember");
const toFullName = require("./lib/toFullName");

module.exports = function (args, msg, app) {
    const tagStorage = app.storage.tag_storage;
    const tag = tagStorage.getKey(args.key);

    if (tag) {
        const creator = msg.guild.member(tag.creator) || dummyMember();

        return toFullName(creator);
    } else {
        return `Tag '${args.key}' not found.`;
    }
};
