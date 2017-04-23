"use strict";

const modifyStatus = require("../commands/lisa/lib/modifyStatus");
const updateNowPlaying = require("../commands/lisa/lib/updateNowPlaying");

module.exports = function (app) {
    const bot = app.bot;

    /**
     * Lisa waterlevel
     */
    updateNowPlaying(app);
    bot.setInterval(() => {
        modifyStatus(app, {
            water: -1
        });
    }, 900000); //15min interval

    console.log("Bot is connected");
};
