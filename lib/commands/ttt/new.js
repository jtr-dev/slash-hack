"use strict";

const fieldDefault = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

module.exports = function (args, msg, app) {
    const field = Array.from(fieldDefault.map(row => Array.from(row))); //clone field
    const ttt = app.storage.tictactoe;

    ttt.setKey("field", field);
    ttt.save(true);

    return "Field has been reset";
};
