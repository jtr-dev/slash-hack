"use strict";

const statusGet = require("./lib/statusGet");
const stringifyStatus = require("./lib/stringifyStatus");

module.exports = function (args, msg, app) {
    const status = statusGet(app);
    const statusText = stringifyStatus(status);

    return statusText;
};
