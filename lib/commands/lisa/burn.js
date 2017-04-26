"use strict";

const statusModify = require("./lib/statusModify");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    statusModify(app, {
        water: -999
    }, msg.author.name);

    return randomFromArray(["_you hear muffled plant screams as you set Lisa on fire_", "_lisa looks at you, judging your actions_", "AAAAAAAAAAAAAAAAAAAAAAAAAAAA"]);
};
