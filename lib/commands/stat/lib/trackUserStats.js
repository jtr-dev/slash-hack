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
    let userData = data.users.getKey(userId) || createEmptyUser();

    /*console.log({
        userId,
        data,
        userData
    });*/

    userData = calcMessageStats(userData, msg.content);

    data.users.setKey(userId, userData);
    data.users.save(true);
};
