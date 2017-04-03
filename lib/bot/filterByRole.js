"use strict";

const cfg = require("../../config.json");

module.exports = function (msg, cli, keys) {
    const isUserAdmin = cfg.adminIds.includes(msg.author.id);

    return keys.filter(key => {
        const command = cli.getCommand(key);

        return !command.admin || isUserAdmin;
    });
};
