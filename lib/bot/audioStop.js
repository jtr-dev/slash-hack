"use strict";

/**
 * Stops all audio playback and dissconnects
 */
module.exports = function (bot) {
    const voice = bot._instance.voice;

    voice.playing = false;
    voice.dispatcher.end();
    voice.connection.disconnect();
    voice.channel.leave();

    bot._instance.log.info("Audio: stopped playing");

    return true;
};
