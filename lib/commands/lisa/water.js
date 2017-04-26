"use strict";

const statusModify = require("./lib/statusModify");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    statusModify(app, {
        water: args.waterAmount
    }, msg.author.username);

    return randomFromArray(["_is being watered_", "_water noises_", "_watering noises_", "_you hear lisa sucking up the water_"]);
};
