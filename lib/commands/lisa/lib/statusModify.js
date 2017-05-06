"use strict";

const statusGet = require("./statusGet");
const statusSet = require("./statusSet");
const statusKill = require("./statusKill");

module.exports = function (app, modifier, user) {
    let status = statusGet(app);

    if (modifier.water) {
        status.water += modifier.water;

        if (status.water > 150) {
            status.happiness = 150;
            status = statusKill(status, "drowning", user);
        }
        if (status.water <= 0) {
            status.happiness = 0;
            status = statusKill(status, "dehydration", user);
        }
    }

    if (modifier.happiness) {
        status.happiness += modifier.happiness;

        if (status.happiness <= 0) {
            status.happiness = 0;
            status = statusKill(status, "loneliness", user);
        }

        if (status.happiness > 100) {
            status.happiness = 100;
        }
    }

    statusSet(app, status);

    return status;
};
