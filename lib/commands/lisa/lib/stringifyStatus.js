"use strict";

const stringifyFloof = require("./stringifyFloof");
const moment = require("moment");

module.exports = function (status) {
    if (status.isAlive) {
        const waterLevel = Math.floor(status.water);
        const happinessLevel = Math.floor(status.happiness);
        const textFloof = stringifyFloof(status);
        const textRaw = `Water: ${waterLevel}% | Happiness: ${happinessLevel}%.`;

        return [textFloof, textRaw].join("\n");
    } else {
        const lifetime = status.death - status.birth;
        const lifetimeString = moment.duration(lifetime).humanize();
        const highscoreString = moment.duration(status.highscore).humanize();
        const textIntro = `Lisa is dead, killed by ${status.killer} trough ${status.deathBy}.`;
        const textScore = `She was alive for ${lifetimeString}, the highscore was ${highscoreString}.`;

        return [textIntro, textScore].join("\n");
    }
};
