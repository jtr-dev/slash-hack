"use strict";

const getUniqueStringNumber = require("./lib/getUniqueStringNumber");

const rateName = function (name) {
    const nameLower = name.toLowerCase();

    if (nameLower === "niklas" || nameLower === "asriel" || nameLower === "truemgf") {
        return `${name} is a cool human.`;
    } else if (nameLower === "vide") {
        return `${name} has the dankest memes.`;
    } else if (nameLower === "julez" || nameLower === "julius") {
        return `${name} never accepts the AFK check.`;
    } else if (nameLower === "tobi" || nameLower === "armannier") {
        return `${name} is actually Jonas`;
    } else if (nameLower === "jonas" || nameLower === "thefox") {
        return `${name} is actually Tobi.`;
    } else if (nameLower === "johannes" || nameLower === "steak") {
        return `${name} is 1 fickschnitzel vong der niceigkeit her.`;
    } else {
        const rating = getUniqueStringNumber(nameLower); //Generates a number from 0 to 10 for this name

        return `${name} is a solid ${rating}/10.`;
    }
};


module.exports = function (bot, options, args) {
    return rateName(args.thing);
};
