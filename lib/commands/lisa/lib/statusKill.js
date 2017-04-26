"use strict";

const statusGet = require("./statusGet");
const statusSet = require("./statusSet");

module.exports = function (app, killer) {
    const status = statusGet(app);

    status.isAlive = false;
    status.killer = killer;
    status.death = Date.now();

    statusSet(app, status);

    return status;
};
