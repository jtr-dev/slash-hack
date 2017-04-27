"use strict";

const toFullName = require("../toFullName");

module.exports = function (app, msg) {
    return function () {
        const membersArr = msg.guild.members.array();
        const randomMember = membersArr[Math.floor(Math.random() * membersArr.length)];

        return toFullName(randomMember.user);
    };
};
