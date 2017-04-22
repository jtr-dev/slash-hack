"use strict";

const getStatus = require("./getStatus");
const setStatus = require("./setStatus");

module.exports = function (app, modifier) {
    const status = getStatus(app);

    if (modifier.water) {
        status.water += modifier.water;

        if (status.water > 200) {
            status.water = 200;
        } else if (status.water < 0) {
            status.water = 0;
        }
    }

    setStatus(app, status);

    return status;
};
