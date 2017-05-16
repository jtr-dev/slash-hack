"use strict";

const about = require("./commands/core/about");
const invite = require("./commands/core/invite");

const lisa_status = require("./commands/lisa/status");
const lisa_replant = require("./commands/lisa/replant");
const lisa_water = require("./commands/lisa/water");
const lisa_burn = require("./commands/lisa/burn");
const lisa_pet = require("./commands/lisa/pet");
const lisa_hug = require("./commands/lisa/hug");
const lisa_joke = require("./commands/lisa/joke");
const lisa_punch = require("./commands/lisa/punch");
const lisa_topic = require("./commands/lisa/topic");
const lisa_meow = require("./commands/lisa/meow");
const lisa_rawr = require("./commands/lisa/rawr");
const lisa_flirt = require("./commands/lisa/flirt");

const tag_eval = require("./commands/tag/eval");
const tag_set = require("./commands/tag/set");
const tag_get = require("./commands/tag/get");
const tag_raw = require("./commands/tag/raw");
const tag_tree = require("./commands/tag/tree");
const tag_owner = require("./commands/tag/owner");
const tag_yna = require("./commands/tag/yna");

const fun_commit = require("./commands/fun/commit");
const fun_rate = require("./commands/fun/rate");
const fun_ship = require("./commands/fun/ship");
const fun_interesting = require("./commands/fun/interesting");
const fun_roast = require("./commands/fun/roast");
const fun_clap = require("./commands/fun/clap");
const fun_square = require("./commands/fun/square");
const fun_respect = require("./commands/fun/respect");

const ttt_play = require("./commands/ttt/play");
const ttt_field = require("./commands/ttt/field");
const ttt_new = require("./commands/ttt/new");

module.exports = {
    /**
     * Core
     */
    "about": {
        fn: about,
        alias: ["info"],
        args: [],
        help: {
            short: "About this bot",
            long: "Shows info about this bot"
        }
    },
    "invite": {
        fn: invite,
        alias: ["join"],
        args: [],
        help: {
            short: "Add Lisa to your server",
            long: "Allows you to invite Lisa to your server"
        }
    },

    /**
     * Lisa
     */
    "status": {
        fn: lisa_status,
        alias: [],
        args: [],
        help: {
            short: "Show how Lisa is doing",
            long: "Show how Lisa is doing"
        }
    },
    "replant": {
        fn: lisa_replant,
        alias: ["respawn"],
        args: [],
        help: {
            short: "Replant Lisa",
            long: "Replant Lisa"
        }
    },
    "water": {
        fn: lisa_water,
        alias: [],
        args: [{
            name: "waterAmount",
            type: "number",
            default: 25,
            required: false,
            help: "Amount to water"
        }],
        help: {
            short: "Water Lisa",
            long: "Water Lisa"
        }
    },
    "burn": {
        fn: lisa_burn,
        alias: ["fire", "killitwithfire"],
        args: [],
        hidden: true,
        help: {
            short: "Burn...Lisa?",
            long: "Burn...Lisa? (you monster)"
        }
    },
    "pet": {
        fn: lisa_pet,
        alias: ["pat"],
        args: [],
        help: {
            short: "Pet Lisa",
            long: "Pet Lisa"
        }
    },
    "hug": {
        fn: lisa_hug,
        alias: ["snug"],
        args: [],
        hidden: true,
        help: {
            short: "Hug Lisa",
            long: "Hug Lisa"
        }
    },
    "joke": {
        fn: lisa_joke,
        alias: ["pun"],
        args: [],
        hidden: true,
        help: {
            short: "Tell Lisa a joke",
            long: "Tell Lisa a joke"
        }
    },
    "punch": {
        fn: lisa_punch,
        alias: ["cut"],
        args: [],
        hidden: true,
        help: {
            short: "Punch Lisa",
            long: "Punch Lisa"
        }
    },
    "topic": {
        fn: lisa_topic,
        alias: ["conversation"],
        args: [],
        hidden: true,
        help: {
            short: "Let Lisa decide the topic",
            long: "Let Lisa decide the topic"
        }
    },
    "meow": {
        fn: lisa_meow,
        alias: ["meow", "auu"],
        args: [],
        hidden: true,
        help: {
            short: "Meow",
            long: "Meow"
        }
    },
    "rawr": {
        fn: lisa_rawr,
        alias: ["owo"],
        args: [],
        hidden: true,
        help: {
            short: "Rawr",
            long: "Rawr ;^)"
        }
    },
    "flirt": {
        fn: lisa_flirt,
        alias: [],
        args: [],
        hidden: true,
        help: {
            short: ";)",
            long: ";)"
        }
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
                    required: false,
                    default: null,
                    help: "YNA Code"
                }],
                help: {
                    short: "Saves a tag",
                    long: "Saves a tag to the bots db"
                }
            },
            "owner": {
                fn: tag_owner,
                alias: [],
                args: [{
                    name: "key",
                    type: "string",
                    required: true,
                    help: "Tag name"
                }],
                help: {
                    short: "Retrieves the owner of a tag",
                    long: "Retrieves the owner of a tag"
                }
            },
            "raw": {
                fn: tag_raw,
                alias: ["code"],
                args: [{
                    name: "key",
                    type: "string",
                    required: true,
                    help: "Tag name"
                }],
                help: {
                    short: "Gets the raw code of a tag",
                    long: "Gets the raw code of a tag"
                }
            },
            "tree": {
                fn: tag_tree,
                alias: ["debug"],
                args: [{
                    name: "key",
                    type: "string",
                    required: true,
                    help: "Tag name"
                }],
                help: {
                    short: "Gets the parsed code of a tag",
                    long: "Gets the parsed code of a tag"
                }
            },
            "yna": {
                fn: tag_yna,
                alias: ["help", "info", "na", "about"],
                args: [],
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
        fn: fun_commit,
        alias: [],
        args: [],
        help: {
            short: "Shows a commit message",
            long: "Shows a commit message"
        }
    },
    "rate": {
        fn: fun_rate,
        alias: [],
        args: [{
            name: "thing",
            type: "string",
            required: true,
            help: "Thing to rate"
        }],
        help: {
            short: "Rates something",
            long: "Rates something from 1 to 10"
        }
    },
    "ship": {
        fn: fun_ship,
        alias: ["fuse"],
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
        help: {
            short: "Ships people",
            long: "Ships person 1 with person 2"
        }
    },
    "roast": {
        fn: fun_roast,
        alias: ["roasted"],
        args: [{
            name: "thing",
            type: "string",
            default: "nothing",
            required: true,
            help: "Thing to roast"
        }],
        help: {
            short: "Roast a person",
            long: "Roast a person"
        }
    },
    "interesting": {
        fn: fun_interesting,
        alias: [],
        args: [],
        hidden: true,
        help: {
            short: "Declare something for interesting",
            long: "Declare something for interesting"
        }
    },
    "square": {
        fn: fun_square,
        alias: ["squares"],
        args: [{
            name: "text",
            type: "string",
            required: true,
            help: "Text to square"
        }],
        help: {
            short: "Output a text as square",
            long: "Output a text as square"
        }
    },
    "clap": {
        fn: fun_clap,
        alias: ["clapifier"],
        args: [{
            name: "text",
            type: "string",
            required: true,
            help: "Text to clap"
        }],
        help: {
            short: "Output a text clapped",
            long: "Output a text clapped"
        }
    },
    "respect": {
        fn: fun_respect,
        alias: ["f", "respects"],
        args: [],
        hidden: true,
        help: {
            short: "Pay respect",
            long: "Pay respect"
        }
    },

    /**
     * TicTacToe
     */
    "tictactoe": {
        fn: ttt_play,
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
        help: {
            short: "Play TicTacToe",
            long: "Play TicTacToe"
        },
        sub: {
            "field": {
                fn: ttt_field,
                alias: ["status", "view", "show"],
                args: [],
                help: {
                    short: "Show field",
                    long: "Show field"
                }
            },
            "new": {
                fn: ttt_new,
                alias: ["create", "reset", "start", "clear"],
                args: [],
                help: {
                    short: "Reset field",
                    long: "Reset field"
                }
            }
        }
    },

};
