"use strict";

const about = require("./commands/core/about");

//const stat_user = require("./commands/stat/stat_user");
//const stat_server = require("./commands/stat/stat_server");

const water = require("./commands/lisa/water");
const burn = require("./commands/lisa/burn");
const replant = require("./commands/lisa/replant");
const pet = require("./commands/lisa/pet");
const joke = require("./commands/lisa/joke");
const punch = require("./commands/lisa/punch");
const status = require("./commands/lisa/status");
const topic = require("./commands/lisa/topic");

const tag_eval = require("./commands/tag/tag_eval");
const tag_set = require("./commands/tag/tag_set");
const tag_get = require("./commands/tag/tag_get");
const tag_yna = require("./commands/tag/tag_yna");

const commit = require("./commands/fun/commit");
const rate = require("./commands/fun/rate");
const ship = require("./commands/fun/ship");
const interesting = require("./commands/fun/interesting");
const roast = require("./commands/fun/roast");
const clap = require("./commands/fun/clap");
const square = require("./commands/fun/square");

const tictactoe_play = require("./commands/tictactoe/tictactoe_play");
const tictactoe_field = require("./commands/tictactoe/tictactoe_field");
const tictactoe_new = require("./commands/tictactoe/tictactoe_new");

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
        args: [{
            name: "waterAmount",
            type: "number",
            default: 25,
            required: false,
            help: "Amount to water"
        }],
        admin: false,
        outputType: "text",
        help: {
            short: "Water Lisa",
            long: "Water Lisa"
        }
    },
    "burn": {
        fn: burn,
        alias: ["fire", "killitwithfire"],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Burn...Lisa?",
            long: "Burn...Lisa? (you monster)"
        }
    },
    "replant": {
        fn: replant,
        alias: ["respawn"],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Replant Lisa",
            long: "Replant Lisa"
        }
    },
    "pet": {
        fn: pet,
        alias: ["hug"],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Pet Lisa",
            long: "Pet Lisa"
        }
    },
    "joke": {
        fn: joke,
        alias: ["pun"],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Tell Lisa a joke",
            long: "Tell Lisa a joke"
        }
    },
    "punch": {
        fn: punch,
        alias: ["cut"],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Punch Lisa",
            long: "Punch Lisa"
        }
    },
    "status": {
        fn: status,
        alias: ["whatsup"],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Show how Lisa is doing",
            long: "Show how Lisa is doing"
        }
    },
    "topic": {
        fn: status,
        alias: ["conversation"],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Let Lisa decide the topic",
            long: "Let Lisa decide the topic"
        }
    },


    /**
     * Stats
     */
    /*"stat": {
        fn: stat_user,
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
                fn: stat_server,
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
    },*/

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
            short: "Loads a tag",
            long: "Loads a tag stored in the bots db"
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
            },
            "yna": {
                fn: tag_yna,
                alias: ["help", "info", "na"],
                args: [],
                admin: false,
                outputType: "text",
                help: {
                    short: "Displays Info about YNA",
                    long: "Displays Info about YNA"
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
        fn: roast,
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

    "tictactoe": {
        fn: tictactoe_play,
        alias: ["ttt"],
        args: [{
            name: "x",
            type: "string",
            required: true,
            help: "X-coordinate (1|2|3)"
        }, {
            name: "y",
            type: "string",
            required: true,
            help: "Y-coordinate (a|b|c)"
        }],
        admin: false,
        outputType: "code",
        help: {
            short: "Play TicTacToe",
            long: "Play TicTacToe"
        },
        sub: {
            "field": {
                fn: tictactoe_field,
                alias: ["status", "view", "show"],
                args: [],
                admin: false,
                outputType: "code",
                help: {
                    short: "Show field",
                    long: "Show field"
                }
            },
            "new": {
                fn: tictactoe_new,
                alias: ["create", "reset", "start", "clear"],
                args: [],
                admin: false,
                outputType: "code",
                help: {
                    short: "Reset field",
                    long: "Reset field"
                }
            }
        }
    },

};
