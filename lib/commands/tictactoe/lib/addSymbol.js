"use strict";

module.exports = function (field, x, y, symbol) {
    const newField = Array.from(field);

    if (newField[y][x] === " ") {
        newField[y][x] = symbol;

        return newField;
    } else {
        return false;
    }
};
