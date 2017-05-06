"use strict";

const statusModify = require("../commands/lisa/lib/statusModify");

module.exports = function (msg, app) {
    statusModify(app, {
        happiness: 0.5
    }, "Activity");
};
