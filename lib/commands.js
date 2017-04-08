"use strict";

const about = require("./commands/core/about");
const help = require("./commands/core/help");

const commit = require("./commands/xd/commit");
const navy = require("./commands/xd/navy");
const rate = require("./commands/xd/rate");
const ship = require("./commands/xd/ship");
const roll = require("./commands/xd/roll");
const interesting = require("./commands/xd/interesting");
const roasted = require("./commands/xd/roasted");
const clap = require("./commands/xd/clap");
const square = require("./commands/xd/square");

const meme = require("./commands/xd/meme");
const nicememe = require("./commands/xd/nicememe");
const defuse = require("./commands/xd/defuse");
const stfu = require("./commands/xd/stfu");


module.exports = {
    //System
    about: {
        fn: about,
        alias: ["why", "?", "info"],
        args: [],
        admin: false,
        outputType: "code",
        help: {
            short: "About this bot",
            long: "Shows info about this bot"
        }
    },
    help: {
        fn: help,
        alias: ["halp", "what"],
        args: [{
            name: "command",
            type: "string",
            default: "",
            required: false,
            help: "Command to get help for"
        }],
        admin: false,
        outputType: "code",
        help: {
            short: "Shows help",
            long: "(#command#)"
        }
    },

    //Text
    commit: {
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
    navy: {
        fn: navy,
        alias: [],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Shows the navy seal copypasta",
            long: "Shows the navy seal copypasta"
        }
    },
    rate: {
        fn: rate,
        alias: ["reee"],
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
    ship: {
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
    roll: {
        fn: roll,
        alias: [],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Rolls a dice",
            long: "Rolls a dice"
        }
    },
    roast: {
        fn: roasted,
        alias: ["roast", "rost", "rek", "rekt"],
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
    interesting: {
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
    square: {
        fn: square,
        alias: ["squarememe"],
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
    clap: {
        fn: clap,
        alias: [],
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

    //Voice
    meme: {
        fn: meme,
        alias: ["maymay", "meemee"],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Plays audio meme",
            long: "Plays audio meme"
        }
    },
    nicememe: {
        fn: nicememe,
        alias: ["neatmeme", "noice"],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Plays audio Nice Meme",
            long: "Plays audio Nice Meme"
        }
    },
    defuse: {
        fn: defuse,
        alias: ["defus", "dofuse", "dofus"],
        args: [],
        admin: false,
        outputType: "text",
        help: {
            short: "Plays defuse Meme",
            long: "Plays defuse Meme"
        }
    },
    stfu: {
        fn: stfu,
        alias: ["silence", "silencium", "mute"],
        args: [],
        admin: false,
        outputType: "code",
        help: {
            short: "Stops Audio",
            long: "Stops Audio"
        }
    }
};
