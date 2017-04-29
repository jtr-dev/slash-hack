
"use strict";

const statusGet = require("./lib/statusGet");
const statusModify = require("./lib/statusModify");
const stringifyStatus = require("./lib/stringifyStatus");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    const status = statusGet(app);

    if (status.isAlive) {
        const statusNew = statusModify(app, {
            happiness: -10
        }, msg.author.username);
        const statusString = stringifyStatus(statusNew);
        const outputString = randomFromArray(["_you punch lisa in the leafes_", "_you throw some sand at lisa_", "_you glomp lisa_","_you clip away a leaf_"]);

        return [outputString, statusString].join("\n");
    } else {
        return "The dead feel no pain...";
    }
};
