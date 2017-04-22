"use strict";

const setStatus = require("./lib/setStatus");

module.exports = function (args, msg, app) {
    setStatus(app, 25);

    return "_is being watered_";
};
