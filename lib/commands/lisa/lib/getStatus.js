"use strict";

const statusDefault = require("./default.json");

module.exports = function (app) {
    const lisa = app.storage.lisa;
    const defaultStatus = Object.assign({}, statusDefault);
    const status = lisa.getKey("status") || defaultStatus;

    return status;
};
