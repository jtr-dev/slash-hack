"use strict";

const statusGet = require("./statusGet");
const statusSet = require("./statusSet");
const statusKill = require("./statusKill");

module.exports = function (app, modifier) {
    const status = statusGet(app);

    if (modifier.water) {
        status.water += modifier.water;

        if (status.water > 150) {
            status.water = 200;
        } else if (status.water < 0) {
            status.water = 0;
        }
    }

    if (modifier.happiness) {
        status.happiness += modifier.happiness;

        if (status.happiness > 100) {
            status.happiness = 100;
        } else if (status.happiness < 0) {
            status.happiness = 0;
        }
    }

    statusSet(app, status);

    return status;
};
