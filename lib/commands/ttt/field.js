"use strict";

const displayField = require("./lib/displayField");

module.exports = function (args, msg, app) {
    const ttt = app.storage.tictactoe;
    const field = ttt.getKey("field");

    return [displayField(field),"field"];
};
