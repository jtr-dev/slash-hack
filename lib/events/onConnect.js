"use strict";

const statusModify = require("../commands/lisa/lib/statusModify");
const statusGet = require("../commands/lisa/lib/statusGet");
const statusNowPlaying = require("../commands/lisa/lib/statusNowPlaying");

module.exports = function (app) {
    const bot = app.bot;
    const status = statusGet(app);

    /**
     * Lisa waterlevel
     */
    statusNowPlaying(app,status);
    bot.setInterval(() => {
        statusModify(app, {
            water: -1,
            happiness: -2.5
        }, "Time");
    }, 60000); //1min interval

    console.log("Bot is connected");
};
