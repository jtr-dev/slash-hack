"use strict";

const statusGetDefault = require("./lib/statusGetDefault");
const statusSet = require("./lib/statusSet");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    statusSet(app, statusGetDefault());

    return randomFromArray(["_is being replanted_", "_you plant a clone of lisa_", "_plants new lisa on top of the remnants of her ancestors_"]);
};
