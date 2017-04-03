"use strict";

module.exports = function (bot) {
    bot.setTimeout(() => {
        bot.destroy().then(() => {
            bot._instance.log.info("Bot stop success");
        }).catch(err => {
            bot._instance.log.error("Bot stop failed", err);
        });
    }, 1000);
};
