"use strict";

const statusModify = require("./lib/statusModify");
const randomFromArray = require("./lib/randomFromArray");

module.exports = function (args, msg, app) {
    statusModify(app, {
        happiness: 10
    }, msg.author.name);

    return randomFromArray(["_is pet_", "_is petted_", "_smiles and is pet_"]);
};
