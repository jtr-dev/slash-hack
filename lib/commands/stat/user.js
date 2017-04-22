"use strict";

module.exports = function (args, msg, app) {
    const userId = args.id || msg.author.id;
    const data = app.storage.stat_users.getKey(userId);

    if (data) {
        const averageWords = Math.round(data.words / data.messages);
        const averageLetters = Math.round(data.letters / data.messages);

        const str = `This user sent ${data.messages} messages` +
            ` with ${data.words} words ` +
            `and ${data.letters} letters total.\n` +
            `They have an average of ${averageWords} words ` +
            `and ${averageLetters} letters per message.`;

        return str;
    } else {
        return "No data available for this user";
    }
};
