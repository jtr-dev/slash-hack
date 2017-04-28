"use strict";

module.exports = function (member) {
    const user = member.user;

    return {
        //User
        name: user.username,
        id: user.id,
        discriminator: user.discriminator,
        avatar: user.avatar,
        bot: user.bot,
        avatar_url: user.avatarURL,
        default_avatar: user.defaultAvatar,
        default_avatar_url: user.defaultAvatarURL,
        mention: `<@${user.id}>`,
        created_at: user.createdTimestamp,
        display_name: member.display_name,

        //Member
        voice: "<NYI>",
        joined_at: member.joinedTimestamp,
        roles: "<NYI>",
        status: user.presence.status,
        game: user.presence.game,
        server: "<NYI>",
        nick: member.display_name,
        colour: "<NYI>",
        color: "<NYI>",
        top_role: "<NYI>",
        server_permissions: "<NYI>"
    };
};
