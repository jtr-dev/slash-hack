"use strict";

const convertMember = require("./convertMember");
const convertChannel = require("./convertChannel");
const convertServer = require("./convertServer");

module.exports = function (msg, creatorMember) {
    const me = convertMember(creatorMember);
    const member = convertMember(msg.member);
    const channel = convertChannel(msg.channel);
    const server = convertServer(msg.channel.guild);

    return {
        me: me,
        meid: me.id,
        caller: member,
        callerid: member.id,
        channel: channel,
        channelid: channel.id,
        server: server,
        serverid: server.id
    };
};
