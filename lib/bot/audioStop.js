"use strict";

/**
 * Stops all audio playback and dissconnects
 */
module.exports = function (bot) {
    const result = bot._instance.voice.playing;

    bot._instance.voice.playing = false;
    bot._instance.voice.dispatcher = null;

    if (bot._instance.voice.channel && bot._instance.voice.channel.leave) {
        bot._instance.voice.channel.leave();
    }

    bot._instance.log.info(`Audio: stopped playing`);

    return result;
};
