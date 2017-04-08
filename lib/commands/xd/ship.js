"use strict";

const getUniqueStringNumber = require("./lib/getUniqueStringNumber");

const ship = function (person1, person2) {
    const person1Score = getUniqueStringNumber(person1.toLowerCase());
    const person2Score = getUniqueStringNumber(person2.toLowerCase());
    const scoreTotal = person1Score * person2Score;
    const shipName = person1.substr(0, 3) + person2.substr(3);

    console.log(person1Score, person2Score,scoreTotal,shipName);

    return [
        "Shipping Complete",
        "--------",
        `${person1} + ${person2} (Ship name: ${shipName})`,
        `Score: ${scoreTotal}%!`
    ].join("\n");
};


module.exports = function (bot, options, args) {
    return ship(args.person1, args.person2);
};
