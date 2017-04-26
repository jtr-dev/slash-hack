"use strict";

const statusGet = require("./lib/statusGet");
const statusModify = require("./lib/statusModify");
const stringifyStatus = require("./lib/stringifyStatus");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    const status = statusGet(app);

    if (status.isAlive) {
        const statusNew = statusModify(app, {
            water: -999
        }, msg.author.username);
        const statusString = stringifyStatus(statusNew);
        const outputString = randomFromArray(["_you hear muffled plant screams as you set Lisa on fire_", "_lisa looks at you, judging your actions_", "AAAAAAAAAAAAAAAAAAAAAAAAAAAA"]);

        return [outputString, statusString].join("\n");
    } else {
        return "Lisa is already dead!";
    }
};
