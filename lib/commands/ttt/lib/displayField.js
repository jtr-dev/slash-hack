"use strict";

module.exports = function (field) {
    const display = [
        "  A B C",
        `1|${field[0][0]}|${field[0][1]}|${field[0][2]}|`,
        `2|${field[1][0]}|${field[1][1]}|${field[1][2]}|`,
        `3|${field[2][0]}|${field[2][1]}|${field[2][2]}|`
    ].join("\n");

    return display;
};
