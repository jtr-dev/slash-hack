"use strict";

//const trackServerStats = require("../commands/stat/lib/trackServerStats");
//const trackUserStats = require("../commands/stat/lib/trackUserStats");
const statusModify = require("../commands/lisa/lib/statusModify");

/*
const ENABLE_DADJOKES = false;
const iam = ["im ", "i'm ", "i am "];
*/

module.exports = function (msg, app) {
    //const text = msg.content;
    //const textLower = text.toLowerCase();
    //const storage = app.storage;

    //trackUserStats(storage, msg);
    //trackServerStats(storage, msg.channel.guild, "messagesSent");

    statusModify(app, {
        happiness: 1
    }, "Activity");

    /*if (!msg.author.bot) {
        if (ENABLE_DADJOKES) {

            iam.forEach(str => {
                if (textLower.startsWith(str)) {
                    const outputString = "Hi " + text.substr(str.length);
                    const output = outputString.length <= 2000 ? outputString : app.strings.errorTooLong;

                    msg.channel.sendMessage(output);
                }
            });

        }
    }*/
};
