"use strict";

const trackServerStats = require("./lib/trackServerStats");
const trackUserStats = require("./lib/trackUserStats");
const ENABLE_DADJOKES = false;
const iam = ["im ", "i'm ", "i am "];

module.exports = function (msg, app) {
    const text = msg.content;
    const textLower = text.toLowerCase();
    const storage = app.storage;

    trackUserStats(storage, msg);
    trackServerStats(storage, msg.channel.guild, "messagesSent");

    if (!msg.author.bot) {
        if (ENABLE_DADJOKES) {

            iam.forEach(str => {
                if (textLower.startsWith(str)) {
                    const outputString = "Hi " + text.substr(str.length) + ", I am xd-bot!";
                    const output = outputString.length <= 2000 ? outputString : app.strings.errorTooLong;

                    msg.channel.sendMessage(output);
                }
            });

        }
    }
};
