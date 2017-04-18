"use strict";

module.exports = function (args, msg, app) {
    const tagStorage = app.data.tags;
    const argsArr = [args.arg1, args.arg2, args.arg3];

    if (tagStorage.has(args.key)) {
        const tag = tagStorage.get(args.key);
        const result = tag.run(argsArr, [], {});

        return result;
    } else {
        return "Not found...";
    }
};
