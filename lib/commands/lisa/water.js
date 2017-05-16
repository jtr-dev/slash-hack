"use strict";

const RANGE = [1, 100];

const statusGet = require("./lib/statusGet");
const statusModify = require("./lib/statusModify");
const stringifyStatus = require("./lib/stringifyStatus");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    const status = statusGet(app);
    const waterAmount = args.waterAmount;

    if (status.isAlive) {
        if (waterAmount >= RANGE[0] && waterAmount <= RANGE[1]) {
            const statusNew = statusModify(app, {
                water: waterAmount
            }, msg.author.username);
            const statusString = stringifyStatus(statusNew);
            const outputString = randomFromArray(["_is being watered_", "_water noises_", "_watering noises_", "_you hear lisa sucking up the water_"]);

            return [outputString, statusString].join("\n");
        } else {
            return `You can only water between ${RANGE[0]} and ${RANGE[1]} percent!`;
        }
    } else {
        return "It's too late to water poor Lisa...";
    }
};
