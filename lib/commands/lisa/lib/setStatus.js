"use strict";

const updateNowPlaying = require("./updateNowPlaying");

module.exports = function (app, status) {
    const lisa = app.storage.lisa;

    updateNowPlaying(app, status);
    lisa.setKey("status", status);
    lisa.save(true);
};
