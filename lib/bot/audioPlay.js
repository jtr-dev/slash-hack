"use strict";

const assetsDir = require("../constants").assetDir;
const audioStop = require("./audioStop");

/**
 * Makes the bot join the user channel and play the given file
 */
module.exports = function (bot, msg, fileName) {
    if (!bot._instance.voice.playing) {
        const fileUrl = assetsDir + fileName;
        const channelId = msg.member.voiceChannelID;

        bot._instance.log.info(`Audio: started playing '${fileUrl}'`);

        bot._instance.voice.channel = msg.guild.channels.get(channelId);

        if (bot._instance.voice.channel) {
            bot._instance.voice.channel.join().then(connection => {
                bot._instance.voice.dispatcher = connection.playFile(fileUrl);
                bot._instance.voice.playing = true;

                bot._instance.voice.dispatcher.on("speaking", (event) => {
                    if (!event) {
                        audioStop(bot);
                    }
                });

                bot._instance.voice.dispatcher.on("error", () => {
                    audioStop(bot);

                    return false;
                });
            }).catch(err => {
                bot._instance.log.error(`Audio: error occured'`, err);

                throw err;
            });
            return true;
        }
    }

    return false;
};
