"use strict";

const toFullName = require("../toFullName");

module.exports = function (app, msg) {
    return function (dataRaw) {
        const _this = this;

        if (dataRaw.length === 0) {
            return new Error("no args");
        } else {
            const data = _this.execItem(dataRaw[0]);
            const member = msg.guild.member(data);

            return toFullName(member.user);
        }
    };
};
