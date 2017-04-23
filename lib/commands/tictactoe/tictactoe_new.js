"use strict";

const fieldDefault = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

module.exports = function (args, msg, app) {
    const field = Array.from(fieldDefault);
    const ttt = app.storage.tictactoe;

    ttt.setKey("field", field);
    ttt.save(true);

    return "Field has ben reset";
};
