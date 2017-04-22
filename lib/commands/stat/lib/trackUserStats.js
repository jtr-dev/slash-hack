"use strict";

const calcMessageStats = require("./calcMessageStats");

const createEmptyUser = function () {
    return {
        messages: 0,
        words: 0,
        letters: 0,
    };
};

module.exports = function (data, msg) {
    const userId = msg.author.id;
    let userData = data.stat_users.getKey(userId) || createEmptyUser();

    /*console.log({
        userId,
        data,
        userData
    });*/

    userData = calcMessageStats(userData, msg.content);

    data.stat_users.setKey(userId, userData);
    data.stat_users.save(true);
};
