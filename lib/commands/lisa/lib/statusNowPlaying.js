"use strict";

const stringifyFloof = require("./stringifyFloof");

module.exports = function (app, status) {
    const statusText = stringifyFloof(status);

    app.bot.user.setGame(statusText);
};
