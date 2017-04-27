"use strict";

module.exports = function (server) {
    return {
        name: server.name,
        me: "<NYI>",
        roles: "<NYI>",
        emoji: "<NYI>",
        region: server.region,
        afk_timeout: server.afkTimeout,
        afk_channel: "<NYI>",
        members: "<NYI>",
        channels: "<NYI>",
        icon: server.icon,
        id: server.id,
        owner: "<NYI>",
        unavailable: "<NYI>",
        large: server.large,
        voice_client: "<NYI>",
        mfa_level: "<NYI>",
        verification_level: "<NYI>",
        features: "<NYI>",
        splash: server.splash,
        default_role: "<NYI>",
        default_channel: "<NYI>",
        icon_url: server.iconURL,
        splash_url: server.splashURL,
        member_count: server.memberCount,
        created_at: server.createdTimestamp,
        role_hierarchy: "<NYI>",
    };
};
