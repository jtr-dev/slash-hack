"use strict";

const commitMessages = require("../../data/texts/whatthecommit");

module.exports = function () {
    const index = Math.floor(Math.random() * commitMessages.length);

    return commitMessages[index];
};
