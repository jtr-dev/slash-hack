"use strict";

const statusGet = require("./lib/statusGet");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    const status = statusGet(app);

    if (status.isAlive) {
        const topic = randomFromArray(["Leafes", "Grass", "Chlorophyl", "Trees", "Food", "Pizza.....wait no: Quiche"]);

        return `Let's talk about ${topic}!`;
    } else {
        return "Dead plants tell no tales...";
    }
};
