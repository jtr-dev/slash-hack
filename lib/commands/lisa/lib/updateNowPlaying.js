"use strict";

const getStatus = require("./getStatus");
const statusToText = require("./statusToText");

module.exports = function (app, optionalStatus) {
    const status = optionalStatus || getStatus(app);
    const statusText = statusToText(status);

    app.bot.user.setGame(statusText);
};
