"use strict";

const commit = require("./commands/xd/commit");
const rate = require("./commands/xd/rate");
const ship = require("./commands/xd/ship");
const interesting = require("./commands/xd/interesting");
const roasted = require("./commands/xd/roasted");
const clap = require("./commands/xd/clap");
const square = require("./commands/xd/square");

const tag_eval = require("./commands/tag/tag_eval");
const tag_set = require("./commands/tag/tag_set");
const tag_get = require("./commands/tag/tag_get");

const user = require("./commands/stat/user");
const server = require("./commands/stat/server");

module.exports = {
    //Text
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
        alias: ["roast"],
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
        alias: ["squarememe", "squares"],
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

    //Tag
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
                alias: ["debug"],
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

    //Stats
    "stat": {
        fn: server,
        alias: ["stats", "s"],
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
    }
};
