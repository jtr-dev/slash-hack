"use strict";

const commitMessages = [   //require("../../../data/assets/whatthecommit.json");
    "Test","test","test"
];

module.exports = function () {
    const index = Math.floor(Math.random() * commitMessages.length);

    return [commitMessages[index], "md"];
};
