"use strict";

const modifyStatus = require("./lib/modifyStatus");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    modifyStatus(app, {
        happiness: 10
    });

    return randomFromArray(["_is pet_", "_is petted", "_smiles and is pet_"]);
};
