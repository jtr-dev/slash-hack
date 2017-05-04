"use strict";

const dummyMember = {
    user: {
        id: "00000000000000000000",
        username: "Not Found",
        discriminator: "0000",
        avatar: "00000000000000000000000000000",
        bot: false,
        lastMessageID: "00000000000000000"
    },
    speaking: false,
    nickname: "Not Found",
    joinedTimestamp: 0,
    lastMessageID: "0000000000000000000000"
};

module.exports = function (id, msg) {
    const resolved = msg.guild.member(id);

    if (resolved) {
        return resolved;
    } else {
        return dummyMember;
    }
};
