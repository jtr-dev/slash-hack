"use strict";

const about = require("./commands/core/about");

const user = require("./commands/stat/user");
const server = require("./commands/stat/server");

const water = require("./commands/lisa/water");
const burn = require("./commands/lisa/burn");
const status = require("./commands/lisa/status");

const tag_eval = require("./commands/tag/tag_eval");
const tag_set = require("./commands/tag/tag_set");
const tag_get = require("./commands/tag/tag_get");

const commit = require("./commands/fun/commit");
const rate = require("./commands/fun/rate");
const ship = require("./commands/fun/ship");
const interesting = require("./commands/fun/interesting");
const roasted = require("./commands/fun/roasted");
const clap = require("./commands/fun/clap");
const square = require("./commands/fun/square");

module.exports = {
    /**
     * Core
     */
    "about": {
        fn: about,
        alias: ["info"],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "About this bot",
            long: "Shows info about this bot"
        }
    },

    /**
     * Lisa
     */
    "water": {
        fn: water,
        alias: [],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Water Lisa",
            long: "Water Lisa"
        }
    },
    "burn": {
        fn: burn,
        alias: ["fire","killitwithfire"],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Burn...Lisa?",
            long: "Burn...Lisa? (you monster)"
        }
    },
    "status": {
        fn: status,
        alias: [],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Show how Lisa is doing",
            long: "Show how Lisa is doing"
        }
    },


    /**
     * Stats
     */
    "stat": {
        fn: user,
        alias: ["player", "user"],
        args: [{
            name: "id",
            type: "string",
            default: "",
            required: false,
            help: "User to look up"
        }],
        admin: false,
        outputType: "text",
        help: {
            short: "Shows server stats",
            long: "Shows current server stats"
        },
        sub: {
            "server": {
                fn: server,
                alias: ["guild"],
                args: [],
                admin: false,
                outputType: "text",
                help: {
                    short: "Shows server stats",
                    long: "Shows current server stats"
                }
            }
        },
    },

    /**
     * Tags
     */
    "tag": {
        fn: tag_get,
        alias: ["t"],
        args: [{
            name: "key",
            type: "string",
            required: true,
            help: "Tag name"
        }, {
            name: "args",
            type: "string",
            required: false,
            default: "",
            help: "args"
        }],
        admin: false,
        outputType: "text",
        help: {
            short: "loads a tag",
            long: "loads a tag stored in the bots db"
        },
        sub: {
            "eval": {
                fn: tag_eval,
                alias: [],
                args: [{
                    name: "yna",
                    type: "string",
                    required: true,
                    help: "YNA Code"
                }, {
                    name: "args",
                    type: "string",
                    required: false,
                    default: "",
                    help: "args"
                }],
                admin: false,
                outputType: "text",
                help: {
                    short: "Evaluates yna",
                    long: "Evaluates yna"
                }
            },
            "set": {
                fn: tag_set,
                alias: ["create"],
                args: [{
                    name: "key",
                    type: "string",
                    required: true,
                    help: "Tag name"
                }, {
                    name: "yna",
                    type: "string",
                    required: true,
                    help: "YNA Code"
                }],
                admin: false,
                outputType: "text",
                help: {
                    short: "Saves a tag",
                    long: "Saves a tag to the bots db"
                }
            }
        }
    },

    /**
     * Fun
     */
    "commit": {
        fn: commit,
        alias: [],
        args: [],
        admin: false,
        outputType: "code",
        help: {
            short: "Shows a commit message",
            long: "Shows a commit message"
        }
    },
    "rate": {
        fn: rate,
        alias: [],
        admin: false,
        args: [{
            name: "thing",
            type: "string",
            required: true,
            help: "Thing to rate"
        }],
        outputType: "text",
        help: {
            short: "Rates something",
            long: "Rates something from 1 to 10"
        }
    },
    "ship": {
        fn: ship,
        alias: ["fuse"],
        admin: false,
        args: [{
            name: "person1",
            type: "string",
            required: true,
            help: "Person 1"
        }, {
            name: "person2",
            type: "string",
            default: "nothing",
            required: false,
            help: "Person 2"
        }],
        outputType: "text",
        help: {
            short: "Ships people",
            long: "Ships person 1 with person 2"
        }
    },
    "roast": {
        fn: roasted,
        alias: ["roasted"],
        args: [{
            name: "thing",
            type: "string",
            default: "nothing",
            required: true,
            help: "Thing to roast"
        }],
        admin: false,
        outputType: "text",
        help: {
            short: "Roast a person",
            long: "Roast a person"
        }
    },
    "interesting": {
        fn: interesting,
        alias: [],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Declare something for interesting",
            long: "Declare something for interesting"
        }
    },
    "square": {
        fn: square,
        alias: ["squares"],
        args: [{
            name: "text",
            type: "string",
            required: true,
            help: "Text to square"
        }],
        admin: false,
        outputType: "code",
        help: {
            short: "Output a text as square",
            long: "Output a text as square"
        }
    },
    "clap": {
        fn: clap,
        alias: ["clapifier"],
        args: [{
            name: "text",
            type: "string",
            required: true,
            help: "Text to clap"
        }],
        admin: false,
        outputType: "text",
        help: {
            short: "Output a text clapped",
            long: "Output a text clapped"
        }
    },

};
