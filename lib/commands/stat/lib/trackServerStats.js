"use strict";

const createEmptyServer = function () {
    return {
        messagesSent: 0,
        messagesDeleted: 0,
        reactionsAdded: 0,
        reactionsRemoved: 0,
    };
};

module.exports = function (data, server, key) {
    const serverId = server.id;
    const serverData = data.stat_servers.getKey(serverId) || createEmptyServer();

    serverData[key]++;

    data.stat_servers.setKey(serverId, serverData);
    data.stat_servers.save(true);
};
