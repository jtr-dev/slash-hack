"use strict";

const getStatus = require("./lib/getStatus");
const statusToText = require("./lib/statusToText");

module.exports = function (args, msg, app) {
    const status = getStatus(app);
    const statusText = statusToText(status);

    return statusText;
};
