"use strict";

const status = require('./lib/status');

module.exports = (args, msg) => {
    let userId = msg.author.id
    status.updateStatus(userId, 0)
    return `Prepare for an adventure, ${msg.author.username}! \n\n Begin by typing \`\\look\``
};
