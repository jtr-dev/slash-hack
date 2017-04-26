"use strict";

module.exports = function (status, killer) {
    const statusNew = Object.assign({}, status);

    statusNew.isAlive = false;
    statusNew.killer = killer;
    statusNew.death = Date.now();

    return statusNew;
};
