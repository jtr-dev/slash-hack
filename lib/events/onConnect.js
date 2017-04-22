"use strict";

const trackServerStats = require("../commands/stat/lib/trackServerStats");
const setStatus = require("../commands/lisa/lib/setStatus");
const getStatus = require("../commands/lisa/lib/getStatus");
const statusToText = require("../commands/lisa/lib/statusToText");

module.exports = function (app) {
    const storage = app.storage;
    const bot = app.bot;
    const waterLevel = getStatus(app);

    /**
     * Stats
     */
    bot.on("messageDelete", ev => trackServerStats(storage, ev.channel.guild, "messagesDeleted"));
    bot.on("messageReactionAdd", ev => trackServerStats(storage, ev.message.channel.guild, "reactionsAdded"));
    bot.on("messageReactionRemove", ev => trackServerStats(storage, ev.message.channel.guild, "reactionsRemoved"));

    /**
     * Lisa waterlevel
     */
    bot.user.setGame(statusToText(waterLevel));
    bot.setInterval(() => {
        setStatus(app, -1);
    }, 60000);

    console.log("Bot is running");
};
