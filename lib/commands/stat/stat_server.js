"use strict";

module.exports = function (args, msg, app) {
    const serverId = msg.channel.guild.id;
    const data = app.storage.stat_servers.getKey(serverId);

    const str = `On this server, ${data.messagesSent} messages were sent ` +
        `with ${data.messagesDeleted} being deleted and ` +
        `${data.reactionsAdded} reactions added.`;

    return str;
};
