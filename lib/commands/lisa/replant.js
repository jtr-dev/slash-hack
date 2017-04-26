"use strict";

const statusDefault = require("./lib/default.json");
const setStatus = require("./lib/setStatus");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    setStatus(app, statusDefault);

    return randomFromArray(["_is being replanted_", "_you plant a clone of lisa_", "_plants new lisa on top of the remnants of her anchestors"]);
};
