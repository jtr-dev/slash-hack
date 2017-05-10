"use strict";

const Yna = require("ynajs");
const loadAttachment = require("di-ngy/lib/util/loadAttachment");
const reservedKeys = ["create", "eval", "yna", "owner", "raw"];

const saveTag = function (key, yna, me, tagStorage) {
    const tagInstance = new Yna(yna);

    tagStorage.setKey(key, {
        creator: me.user.id,
        raw: yna,
        content: tagInstance.tree
    });
    tagStorage.save(true);

    return `Tag '${key}' was saved.`;
};

module.exports = function (args, msg, app) {
    const tagStorage = app.storage.tag_storage;

    if (reservedKeys.includes(args.key)) {
        return "You can't save a tag under this name";
    } else {
        const me = msg.member;
        let yna = args.yna;

        //If no yna was passed
        if (yna === null) {
            const attachments = msg.attachments;
            const arr = attachments.array();

            if (arr.length > 0) {
                const ynaFile = arr[0];

                return loadAttachment(ynaFile)
                    .then(ynaFileText => {
                        return saveTag(args.key, ynaFileText, me, tagStorage);
                    })
                    .catch(err => {
                        return "Error parsing file";
                    });
            } else {
                return "No YNA code found";
            }
        } else {
            return saveTag(args.key, yna, me, tagStorage);
        }
    }
};
