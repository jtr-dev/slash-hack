"use strict";

const toDatetime = require("./toDatetime");

module.exports = function (server) {
    return {
        __default: server.name,

        name: server.name,
        me: "<NYI>",
        roles: "<NYI>",
        emoji: "<NYI>",
        region: server.region,
        afk_timeout: typeof server.afkTimeout !== "undefined" ? server.afkTimeout : "<server:does not have afk_timeout>",
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
        splash: server.splash !== null ? server.splash : "None",
        default_role: "<NYI>",
        default_channel: "<NYI>",
        icon_url: server.iconURL,
        splash_url: server.splashURL !== null ? server.splashURL : "",
        member_count: server.memberCount,
        created_at: toDatetime(server.createdTimestamp),
        role_hierarchy: "<NYI>",
    };
};
