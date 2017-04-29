"use strict";

const toDatetime = require("./toDatetime");
const toFullName = require("./toFullName");

module.exports = function (member) {
    const user = member.user;

    return {
        __default: toFullName(member),

        name: user.username,
        id: user.id,
        discriminator: user.discriminator,
        avatar: user.avatar,
        bot: user.bot,
        avatar_url: user.avatarURL,
        default_avatar: "<NYI>",
        default_avatar_url: user.defaultAvatarURL,
        mention: `<@${user.id}>`,
        created_at: toDatetime(user.createdTimestamp),
        display_name: member.displayName,
        voice: "<NYI>",
        joined_at: toDatetime(member.joinedTimestamp),
        roles: "<NYI>",
        status: user.presence.status,
        game: user.presence.game !== null ? user.presence.game : "None",
        server: "<NYI>",
        nick: member.displayName,
        colour: "<NYI>",
        color: "<NYI>",
        top_role: "<NYI>",
        server_permissions: "<NYI>"
    };
};
