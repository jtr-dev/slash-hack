"use strict";

module.exports = function (app) {
    const lisa = app.storage.lisa;
    const defaultStatus = {
        water: 100
    };
    const status = lisa.getKey("status") || defaultStatus;

    return status;
};
