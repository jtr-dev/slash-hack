"use strict";

const statusGetDefault = require("./lib/statusGetDefault");
const statusGet = require("./lib/statusGet");
const statusSet = require("./lib/statusSet");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    const status = statusGet(app);

    if (!status.isAlive) {
        statusSet(app, statusGetDefault(status.highscore));

        return randomFromArray(["_is being replanted_", "_you plant a clone of lisa_", "_plants new lisa on top of the remnants of her ancestors_"]);
    } else {
        return "Lisa is still alive!";
    }
};
