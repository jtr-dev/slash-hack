"use strict";

const moment = require("moment");

module.exports = function (status) {
    if (status.isAlive) {
        const waterLevel = Math.floor(status.water);
        const happinessLevel = Math.floor(status.happiness);

        return `Water: ${waterLevel}% | Happiness: ${happinessLevel}%`;
    } else {
        const lifetime = status.death - status.birth;
        const lifetimeString = moment.duration(lifetime).humanize();

        return `Lisa is dead, killed by ${status.killer}. She was alive for ${lifetimeString}`;
    }
};
