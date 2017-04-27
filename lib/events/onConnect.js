"use strict";

const statusModify = require("../commands/lisa/lib/statusModify");
const statusGet = require("../commands/lisa/lib/statusGet");
const stringifyStatus = require("../commands/lisa/lib/stringifyStatus");

module.exports = function (app) {
    /*const bot = app.bot;
    const status = statusGet(app);
    const statusText = stringifyStatus(status);*/

    /**
     * Lisa waterlevel
     */
    /*app.bot.user.setGame(statusText);
    bot.setInterval(() => {
        statusModify(app, {
            water: -0.5,
            happiness: -5
        }, "Time");
    }, 60000); //1min interval*/

    console.log("Bot is connected");
};
