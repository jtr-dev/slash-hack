"use strict";

const getStatus = require("./lib/getStatus");
const statusToText = require("./lib/statusToText");

module.exports = function (args, msg, app) {
    const status = getStatus(app);

    return `_${statusToText(status)}_ (${status.water}% watered)`;
};
