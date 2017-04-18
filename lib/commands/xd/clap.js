"use strict";

module.exports = function (args) {
    return args.text.split(" ").map(word => "**" + word.toUpperCase() + "**").join(":clap:");
};
