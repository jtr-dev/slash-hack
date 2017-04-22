"use strict";

module.exports = function (app) {
    const lisa = app.storage.lisa;

    return lisa.getKey("waterLevel");
};
