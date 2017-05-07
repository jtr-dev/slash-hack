"use strict";

module.exports = function (args, msg, app) {
    const text = [
        "I'm always happy to join new servers!",
        "If you want me to join your server, follow this link: ",
        "<https://discordapp.com/oauth2/authorize?&client_id=263671526279086092&scope=bot>"
    ].join("\n");

    return text;
};
