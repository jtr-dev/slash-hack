"use strict";

const convertMember = require("./convertMember");
const convertChannel = require("./convertChannel");
const convertServer = require("./convertServer");

module.exports = function (msg) {
    const member = convertMember(msg.member);
    const channel = convertChannel(msg.channel);
    const server = convertServer(msg.channel.guild);

    return {
        caller: member,
        callerid: member.id,
        channel: channel,
        channelid: channel.id,
        server: server,
        serverid: server.id
    };
};
