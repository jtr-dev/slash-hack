"use strict";

module.exports = function (status, deathBy, killer) {
    const statusNew = Object.assign({}, status);
    let score;

    statusNew.death = Date.now();
    statusNew.isAlive = false;
    statusNew.deathBy = deathBy;
    statusNew.killer = killer;

    score = statusNew.death - statusNew.birth;

    if (score > statusNew.highscore) {
        statusNew.highscore = score;
    }

    return statusNew;
};
