"use strict";

module.exports = function (data, text) {
    const nonWordRegex = /\W+/g;
    const words = text
        .split(nonWordRegex)
        .filter(word => word.length > 0);
    const letters = words.join("").split("");

    data.messages++;
    data.words += words.length;
    data.letters += letters.length;

    return data;
};
