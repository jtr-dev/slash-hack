"use strict";

const statusGet = require("./lib/statusGet");
const statusModify = require("./lib/statusModify");
const stringifyStatus = require("./lib/stringifyStatus");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    const status = statusGet(app);

    if (status.isAlive) {
        const val = Math.random() > 0.5 ? -10 : 20;
        const statusNew = statusModify(app, {
            happiness: val
        }, msg.author.username);
        const statusString = stringifyStatus(statusNew);
        const outputString = randomFromArray(["Why do trees have so many friends? They branch out.", "	A photographer was great at botany because he knew photo synthesis.", "When the plums dry on your tree, it's time to prune.", "The tree that was creating energy was turned into a power-plant.", "My fear of roses is a thorny issue. I'm not sure what it stems from, but it seems likely I'll be stuck with it.", "	The raisin wined about how he couldn't achieve grapeness.", "I can't find my rutabaga. I hope it will turnip."]);

        return [outputString, statusString].join("\n");
    } else {
        return "Dead plants can't listen (probably)";
    }
};
