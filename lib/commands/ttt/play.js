"use strict";

const addSymbol = require("./lib/addSymbol");
const checkForWinner = require("./lib/checkForWinner");
const displayField = require("./lib/displayField");

const validX = ["A", "B", "C"];
const validY = ["1", "2", "3"];

module.exports = function (args, msg, app) {
    const x = validX.indexOf(args.x.toUpperCase());
    const y = validY.indexOf(args.y.toUpperCase());

    if (x !== -1 && y !== -1) {
        const ttt = app.storage.tictactoe;
        const field = ttt.getKey("field");
        const symbol = ttt.getKey("symbol");
        const newField = addSymbol(field, x, y, symbol);

        if (newField) {
            const winner = checkForWinner(newField);
            const display = displayField(field);
            const result = [];

            ttt.setKey("field", field);
            ttt.setKey("symbol", symbol === "X" ? "O" : "X");
            ttt.save(true);

            result.push(display);

            if (winner) {
                result.push("\n", `${winner} won!`);
            }

            return result.join("\n");
        } else {
            return "You cannot place it here";
        }
    } else {
        return "Invalid input";
    }
};
