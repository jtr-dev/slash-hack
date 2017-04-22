"use strict";

module.exports = function (msg, app) {
    return {
        caller: msg.author,
        callerid: msg.author.id,
        channel: msg.channel,
        channelid: msg.channel.id,
        server: msg.channel.guild,
        serverid: msg.channel.guild.id
    };
};
