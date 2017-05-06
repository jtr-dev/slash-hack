"use strict";

const LISA_TICK_INTERVAL = 15000; //1min

const statusModify = require("../commands/lisa/lib/statusModify");
const statusGet = require("../commands/lisa/lib/statusGet");
const statusNowPlaying = require("../commands/lisa/lib/statusNowPlaying");

module.exports = function (app) {
    const bot = app.bot;
    const status = statusGet(app);

    /**
     * Lisa Waterlevel
     */
    statusNowPlaying(app, status);
    bot.setInterval(() => {
        statusModify(app, {
            water: -0.25,
            happiness: -0.5
        }, "Time");
    }, LISA_TICK_INTERVAL);
};
