"use strict";

const setStatus = require("./lib/setStatus");

module.exports = function (args, msg, app) {
    setStatus(app, -300);

    return "_you hear muffled plant screams as you set Lisa on fire_";
};
