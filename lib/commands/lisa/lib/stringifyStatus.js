"use strict";

module.exports = function (status) {
    const waterLevel = Math.round(status.water);
    const happinessLevel = Math.round(status.happiness);
    const rawData = `Water: ${waterLevel}% | Happiness: ${happinessLevel}%`;

    /*if (waterLevel > 150) {
        return "drowning!";
    }else if (waterLevel > 125) {
        return "looking pretty wet...";
    } else if (waterLevel > 100) {
        return "shining in a fresh green";
    } else if (waterLevel > 75) {
        return "growing happily";
    } else if (waterLevel > 50) {
        return "doing ok";
    } else if (waterLevel > 25) {
        return "looking dry...";
    } else {
        return "completely dried out!";
    }*/

    return rawData;
};
