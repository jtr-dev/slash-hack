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
    const serverData = data.servers.getKey(serverId) || createEmptyServer();

    serverData[key]++;

    data.servers.setKey(serverId, serverData);
    data.servers.save(true);
};
