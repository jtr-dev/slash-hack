"use strict";

const FACTOR = 100 / 2;

module.exports = function (status) {
    if (status.isAlive) {
        const val = ((status.water / 100) + (status.happiness / 100)) * FACTOR;

        if (val > 150) {
            return "at the verge of death.";
        } else if (val > 125) {
            return "doing too well...";
        } else if (val > 100) {
            return "doing well.";
        } else if (val > 75) {
            return "growing happily.";
        } else if (val > 50) {
            return "doing fine.";
        } else if (val > 25) {
            return "looking sturdy.";
        } else {
            return "close to dying...";
        }
    } else {
        return "is dead.";
    }
};
