"use strict";

//const trackServerStats = require("../commands/stat/lib/trackServerStats");
//const trackUserStats = require("../commands/stat/lib/trackUserStats");
const statusModify = require("../commands/lisa/lib/statusModify");

/*
const ENABLE_DADJOKES = false;
const iam = ["im ", "i'm ", "i am "];
*/

module.exports = function (msg, app) {
    statusModify(app, {
        happiness: 0.5
    }, "Activity");
};
