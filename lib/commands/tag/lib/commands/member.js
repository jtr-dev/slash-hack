"use strict";

const toFullName = require("../toFullName");
const resolveUserId = require("../resolveUserId");

module.exports = function (app, msg) {
    return function (dataRaw) {
        const _this = this;

        if (dataRaw.length === 0) {
            return new Error("no args");
        } else {
            const id = _this.execItem(dataRaw[0]);
            const member = resolveUserId(msg, id);

            return toFullName(member.user);
        }
    };
};
