"use strict";

const statusToText = require("./statusToText");

module.exports = function (app, status) {
    const lisa = app.storage.lisa;
    const statusText = statusToText(status);

    app.bot.user.setGame(statusText);
    lisa.setKey("status", status);
    lisa.save(true);
};
