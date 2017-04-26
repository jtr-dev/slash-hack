"use strict";

const statusGet = require("./lib/statusGet");
const statusModify = require("./lib/statusModify");
const stringifyStatus = require("./lib/stringifyStatus");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    const status = statusGet(app);

    if (status.isAlive) {
        const statusNew = statusModify(app, {
            water: args.waterAmount
        }, msg.author.username);
        const statusString = stringifyStatus(statusNew);
        const outputString = randomFromArray(["_is being watered_", "_water noises_", "_watering noises_", "_you hear lisa sucking up the water_"]);

        return [outputString, statusString].join("\n");
    } else {
        return "It's too late to water poor Lisa...";
    }
};
