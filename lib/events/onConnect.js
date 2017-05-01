"use strict";

const statusModify = require("../commands/lisa/lib/statusModify");
const statusGet = require("../commands/lisa/lib/statusGet");
const statusNowPlaying = require("../commands/lisa/lib/statusNowPlaying");

module.exports = function (app) {
    const bot = app.bot;
    const status = statusGet(app);

    /**
     * Lisa Waterlevel
     */
    statusNowPlaying(app,status);
    bot.setInterval(() => {

        console.log("Ticked");

        statusModify(app, {
            water: -0.25,
            happiness: -0.75
        }, "Time");
    }, 15000); //1min interval
};
