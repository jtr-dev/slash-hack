"use strict";

const squareMeme = function (str) {
    const arr = str.split("");
    const arr_reverse = Array.from(arr).reverse();
    const arr_l = arr.length;
    const arr_s = arr_l - 1;
    const result = [];

    for (let row_index = 0; row_index < arr_l; row_index++) {
        const line = [];

        for (let line_index = 0; line_index < arr_l; line_index++) {
            if (row_index === 0) {
                line.push(arr[line_index]);
            } else if (row_index === arr_s) {
                line.push(arr_reverse[line_index]);
            } else if (line_index === 0) {
                line.push(arr[row_index]);
            } else if (line_index === arr_s) {
                line.push(arr_reverse[row_index]);
            } else {
                line.push(" ");
            }
        }

        result.push(line.join(" "));
    }

    return result.join("\n");
};

module.exports = function (bot, msg, args) {
    return squareMeme(args.text);
};
