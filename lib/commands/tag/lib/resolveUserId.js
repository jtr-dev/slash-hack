"use strict";

const dummyMember = {
    user: {
        id: "128985967875850240",
        username: "DummyRocks",
        discriminator: "5051",
        avatar: "35a8b84d61abf268e326de42e90f33a7",
        bot: false,
        lastMessageID: "308303898479689728"
    },
    speaking: false,
    nickname: "Dummy",
    joinedTimestamp: 1491131973620,
    lastMessageID: "308303898479689728"
};

module.exports = function (id, msg) {
    const resolved = msg.guild.member(id);

    if (resolved) {
        return resolved;
    } else {
        return dummyMember;
    }
};
