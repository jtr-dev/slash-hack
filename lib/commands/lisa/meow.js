"use strict";

const CAT_IDS = ["133655732187824128", "168558770958499850"];
const statusGet = require("./lib/statusGet");
const statusModify = require("./lib/statusModify");
const stringifyStatus = require("./lib/stringifyStatus");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    const status = statusGet(app);

    if (CAT_IDS.includes(msg.author.id)) {
        if (status.isAlive) {
            const statusNew = statusModify(app, {
                happiness: 35
            }, msg.author.username);
            const statusString = stringifyStatus(statusNew);
            const outputString = randomFromArray(["_meow_", "aaaaaaaaaaa", "Arri is the best cat", "_meows in japanese_"]);

            return [outputString, statusString].join("\n");
        } else {
            return "Dead plants can't meow";
        }
    } else {
        return "You're not a cat >_>";
    }
};
