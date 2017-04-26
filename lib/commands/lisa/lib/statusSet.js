"use strict";

const stringifyStatus = require("./stringifyStatus");

module.exports = function (app, status) {
    const lisa = app.storage.lisa;
    const statusText = stringifyStatus(status);

    app.bot.user.setGame(statusText);
    lisa.setKey("status", status);
    lisa.save(true);
};
