"use strict";

const trackServerStats = require("./lib/trackServerStats");

module.exports = function (app) {
    const storage = app.storage;
    const bot = app.bot;

    bot.on("messageDelete", ev => trackServerStats(storage, ev.channel.guild, "messagesDeleted"));
    bot.on("messageReactionAdd", ev => trackServerStats(storage, ev.message.channel.guild, "reactionsAdded"));
    bot.on("messageReactionRemove", ev => trackServerStats(storage, ev.message.channel.guild, "reactionsRemoved"));

    console.log("Bot is running");
};