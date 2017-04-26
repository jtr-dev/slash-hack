"use strict";

const modifyStatus = require("../commands/lisa/lib/modifyStatus");
const getStatus = require("../commands/lisa/lib/getStatus");
const statusToText = require("../commands/lisa/lib/statusToText");

module.exports = function (app) {
    const bot = app.bot;
    const status = getStatus(app);
    const statusText = statusToText(status);

    /**
     * Lisa waterlevel
     */
    app.bot.user.setGame(statusText);
    bot.setInterval(() => {
        modifyStatus(app, {
            water: -1,
            happiness: -1
        });
    }, 900000); //15min interval

    console.log("Bot is connected");
};
