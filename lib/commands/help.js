"use strict";

const strings = require("../strings");
const lineLength = 32;

module.exports = function (bot, msg, data, detailMode) {
    const result = ["Help", strings.separator];
    const list = [];

    if (detailMode) {
        const command = data.command;
        const aliasText = command.alias.map(key => `'${key}'`).join(", ");

        //Detail help
        result[0] = `Help for command '${command.name}:'`;

        list.push(["Description:", command.help.long]);
        list.push(["Alias:", aliasText]);

        if (command.args.length) {
            list.push(["Args:", "Arguments for this command"]);

            command.args.forEach(arg => {
                list.push([`  ${arg.name}:`, arg.help]);
                list.push(["    Type:", arg.name]);
                list.push(["    Required:", arg.required]);
                list.push(["    Default:", arg.default]);
            });
        }
    } else {
        //Full help list
        for (let [key, command] of data.map) {
            if (!command.admin) {
                list.push([key, command.help.short]);
            }
        }
    }

    result.push(...list.map(item => {
        const spacing = lineLength - item[0].length;

        return item.join(" ".repeat(spacing));
    }));

    return result.join("\n");
};
