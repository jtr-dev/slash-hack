"use strict";

const toDatetime = require("./toDatetime");

module.exports = function (channel) {
    return {
        name: channel.name,
        server: "<NYI>",
        id: channel.id,
        topic: "<NYI>",
        is_private: "<NYI>",
        position: channel.position,
        type: channel.type,
        bitrate: "<NYI>",
        voice_members: "<NYI>",
        user_limit: "<NYI>",
        changed_roles: "<NYI>",
        is_default: "<NYI>",
        mention: `<#${channel.id}>`,
        created_at: toDatetime(channel.createdTimestamp),
        overwrites: "<NYI>",
    };
};
