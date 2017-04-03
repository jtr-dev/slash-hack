"use strict";

const config = require("../../config.json");
const packageJSON = require("../../package.json");

module.exports = function () {
    return [`${config.name}: v${packageJSON.version}`,
        `Repository: ${packageJSON.repository}`
    ].join("\n");
};
