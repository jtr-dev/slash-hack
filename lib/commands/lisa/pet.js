"use strict";

const statusGet = require("./lib/statusGet");
const statusModify = require("./lib/statusModify");
const stringifyStatus = require("./lib/stringifyStatus");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    const status = statusGet(app);

    if (status.isAlive) {
        const statusNew = statusModify(app, {
            happiness: 10
        }, msg.author.username);
        const statusString = stringifyStatus(statusNew);
        const outputString = randomFromArray(["_is pet_", "_is petted_", "_smiles and is pet_"]);

        return [outputString, statusString].join("\n");
    } else {
        return "It's too late to pet poor Lisa...";
    }
};
