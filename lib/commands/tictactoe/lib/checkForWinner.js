"use strict";

const arrAllEqual = (a, b) => a !== " " && a === b ? a : false;

module.exports = function (field) {
    //Row
    for (let y = 0; y < 3; y++) {
        const row = field[y];
        const rowReduced = row.reduce(arrAllEqual);

        if (rowReduced) {
            return rowReduced;
        }
    }

    //Column
    for (let x = 0; x < 3; x++) {
        const column = [field[0][x], field[1][x], field[2][x]];
        const columnReduced = column.reduce(arrAllEqual);

        if (columnReduced) {
            return columnReduced;
        }
    }

    //Diagonal
    const diagonal1 = [field[0][0], field[1][1], field[2][2]];
    const diagonal1Reduced = diagonal1.reduce(arrAllEqual);

    if (diagonal1Reduced) {
        return diagonal1Reduced;
    }

    const diagonal2 = [field[0][2], field[1][1], field[2][0]];
    const diagonal2Reduced = diagonal2.reduce(arrAllEqual);

    if (diagonal2Reduced) {
        return diagonal2Reduced;
    }

    return false;
};
