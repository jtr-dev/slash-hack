"use strict";

const MAX_WATER = 100;
const MAX_HAPPINESS = 100;
const FACTOR = (MAX_WATER + MAX_HAPPINESS) / 2;

module.exports = function (status) {
    if (status.isAlive) {
        const relWater = status.water / MAX_WATER;
        const relHappiness = status.happiness / MAX_HAPPINESS;
        const val = relWater * relHappiness * FACTOR;

        if (val > 150) {
            return "at the verge of death.";
        } else if (val > 125) {
            return "doing too well.";
        } else if (val > 100) {
            return "doing good.";
        } else if (val > 75) {
            return "growing happily.";
        } else if (val > 50) {
            return "doing fine.";
        } else if (val > 25) {
            return "looking sturdy.";
        } else {
            return "close to dying.";
        }
    } else {
        return "is dead.";
    }
};
