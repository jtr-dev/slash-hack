"use strict";

const getUniqueStringNumber = require("./lib/getUniqueStringNumber");

const rateName = function (name) {
    const nameLower = name.toLowerCase();
    const rating = getUniqueStringNumber(nameLower); //Generates a number from 0 to 10 for this name

    return `${name} is a solid ${rating}/10.`;
};


module.exports = function (args) {
    return rateName(args.thing);
};
