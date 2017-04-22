"use strict";

const modifyStatus = require("./lib/modifyStatus");

module.exports = function (args, msg, app) {
    modifyStatus(app, {
        water: -999
    });

    return "_you hear muffled plant screams as you set Lisa on fire_";
};
