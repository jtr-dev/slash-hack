"use strict";

const modifyStatus = require("./lib/modifyStatus");

module.exports = function (args, msg, app) {
    modifyStatus(app, {
        water: 25
    });

    return "_is being watered_";
};
