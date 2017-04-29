"use strict";

module.exports = function (highscore) {
    return {
        water: 100,
        happiness: 100,
        isAlive: true,
        killer: null,
        deathBy: "something",
        birth: Date.now(),
        death: 0,
        highscore: highscore || 0
    };
};
