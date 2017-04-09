"use strict";

const about = require("./commands/core/about");
const help = require("./commands/core/help");

const commit = require("./commands/xd/commit");
const rate = require("./commands/xd/rate");
const ship = require("./commands/xd/ship");
const interesting = require("./commands/xd/interesting");
const roasted = require("./commands/xd/roasted");
const clap = require("./commands/xd/clap");
const square = require("./commands/xd/square");

const meme = require("./commands/voice/meme");
const nicememe = require("./commands/voice/nicememe");
const defuse = require("./commands/voice/defuse");
const stfu = require("./commands/voice/stfu");

const tag_eval = require("./commands/tag/tag_eval");
const tag_set = require("./commands/tag/tag_set");
const tag_get = require("./commands/tag/tag_get");

module.exports = {
    //System
    about: {
        fn: about,
        alias: ["info"],
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
        alias: ["helpme", "how", "tutorial", "intro"],
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
    },

    //Tag
    tag_eval: {
        fn: tag_eval,
        alias: ["t_eval"],
        args: [{
            name: "yna",
            type: "string",
            required: true,
            help: "YNA Code"
        }],
        admin: false,
        outputType: "text",
        help: {
            short: "[ALPHA] YNA tag eval",
            long: "YNA tag eval (ALPHA: report bugs to NobodyRocks)"
        }
    },
    tag_set: {
        fn: tag_set,
        alias: ["t_create", "tag_create", "t_set"],
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
            short: "[ALPHA] YNA tag saving",
            long: "YNA tag saving (ALPHA: report bugs to NobodyRocks)"
        }
    },
    tag_get: {
        fn: tag_get,
        alias: ["t_load", "tag_load", "t_get"],
        args: [{
            name: "key",
            type: "string",
            required: true,
            help: "Tag name"
        }],
        admin: false,
        outputType: "text",
        help: {
            short: "[ALPHA] YNA tag loading",
            long: "YNA tag loading (ALPHA: report bugs to NobodyRocks)"
        }
    }
};
