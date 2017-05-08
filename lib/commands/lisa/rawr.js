"use strict";

const DRAGON_IDS = ["236226432970391556", "276133054337122305", "262113677900120065"];
const statusGet = require("./lib/statusGet");
const statusModify = require("./lib/statusModify");
const stringifyStatus = require("./lib/stringifyStatus");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    const status = statusGet(app);

    if (DRAGON_IDS.includes(msg.author.id)) {
        if (status.isAlive) {
            const statusNew = statusModify(app, {
                happiness: 30
            }, msg.author.username);
            const statusString = stringifyStatus(statusNew);
            const outputString = randomFromArray(["OwO whats this?", "_nuzzles you_", "pointy noses are cute"]);

            return [outputString, statusString].join("\n");
        } else {
            return "OwO whats this? a dead Lisa...";
        }
    } else {
        return "You're not a dragon uwu";
    }
};
