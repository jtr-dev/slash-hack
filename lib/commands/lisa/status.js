"use strict";

const getStatus = require("./lib/getStatus");
const statusToText = require("./lib/statusToText");

module.exports = function (args, msg, app) {
    const waterLevel = getStatus(app);

    return `_${statusToText(waterLevel)}_ (${waterLevel}% watered)`;
};
