"use strict";

const modifyStatus = require("./lib/modifyStatus");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    modifyStatus(app, {
        water: -999
    });

    return randomFromArray(["_you hear muffled plant screams as you set Lisa on fire_", "_lisa looks at you, judging your actions_", "AAAAAAAAAAAAAAAAAAAAAAAAAAAA"]);
};
