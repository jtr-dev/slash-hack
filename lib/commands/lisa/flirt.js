"use strict";

const statusGet = require("./lib/statusGet");
const statusModify = require("./lib/statusModify");
const stringifyStatus = require("./lib/stringifyStatus");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    const status = statusGet(app);

    if (status.isAlive) {
        const val = Math.random() > 0.5 ? -30 : 30;
        const statusNew = statusModify(app, {
            happiness: val,
            water: 10
        }, msg.author.username);
        const statusString = stringifyStatus(statusNew);
        const outputString = val > 0 ? randomFromArray(["_Lisa wiggles her leaves at you_", "_Lisa looks in your eyes :eyes:_"]) : randomFromArray(["_Lisa waggles away_", "_Lisa awkardly laughs_"]);

        return [outputString, statusString].join("\n");
    } else {
        return "Dead plants can't flirt (probably)";
    }
};
