"use strict";

const user = require("./commands/user");
const member = require("./commands/member");
const nameof = require("./commands/nameof");

module.exports = function (tagInstance, msg, app) {
    tagInstance.addCommand("user", user(app, msg));
    tagInstance.addCommand("member", member(app, msg));
    tagInstance.addCommand("nameof", nameof(app, msg));
};
