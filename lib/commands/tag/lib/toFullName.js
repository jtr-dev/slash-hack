"use strict";

module.exports = user => typeof user !== "undefined" ? `${user.username}#${user.discriminator}` : "Dummy#1234";
