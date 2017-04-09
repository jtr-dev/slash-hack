"use strict";

const assetsDir = require("../constants").assetsDir;
const audioStop = require("./audioStop");

/**
 * Makes the bot join the user channel and play the given file
 */
module.exports = function (bot, msg, fileName) {
    const voice = bot._instance.voice;
    const voiceChannel = msg.member.voiceChannel;
    const fileUrl = assetsDir + fileName;

    if (!voice.playing && voiceChannel && voiceChannel.name) {

        bot._instance.log.info(`Audio: started playing '${fileUrl}'`);
        voice.channel = voiceChannel;

        voiceChannel.join().then(connection => {
            voice.playing = true;
            voice.connection = connection;
            voice.dispatcher = connection.playFile(fileUrl)
                .on("end", () => {
                    audioStop(bot);
                })
                .on("error", () => {
                    audioStop(bot);
                });
        }).catch(err => {
            bot._instance.log.error("Audio: error occured", err);
        });

        return true;
    } else {
        return false;
    }
};
