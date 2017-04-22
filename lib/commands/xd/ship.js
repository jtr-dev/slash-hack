"use strict";

const getUniqueStringNumber = require("./lib/getUniqueStringNumber");
const getHalfIndex = str => Math.round(str.length / 2);
const ship = function (person1, person2) {
    const person1Score = getUniqueStringNumber(person1.toLowerCase());
    const person2Score = getUniqueStringNumber(person2.toLowerCase());
    const personLongest = person1.length > person2.length ? person1.length : person2.length;
    const scoreBase = person1Score * person2Score;
    const scoreTotal = scoreBase + personLongest;
    const shipName = person1.substr(0, getHalfIndex(person1)) + person2.substr(getHalfIndex(person2));

    return [
        "Shipping Complete",
        "--------",
        `${person1} + ${person2} (Ship name: ${shipName})`,
        `Score: ${scoreTotal}%!`
    ].join("\n");
};

module.exports = function (args) {
    return "No.";//ship(args.person1, args.person2);
};
