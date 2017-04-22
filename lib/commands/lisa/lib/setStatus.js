"use strict";

const statusToText = require("./statusToText");

module.exports = function (app, waterModfier) {
    const lisa = app.storage.lisa;
    let waterLevel = lisa.getKey("waterLevel") || 100;

    waterLevel += waterModfier;

    if (waterLevel > 200) {
        waterLevel = 200;
    } else if (waterLevel < 0) {
        waterLevel = 0;
    }

    app.bot.user.setGame(statusToText(waterLevel));

    lisa.setKey("waterLevel", waterLevel);
    lisa.save(true);
};
