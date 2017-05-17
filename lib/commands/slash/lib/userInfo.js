const status = require('./status');

module.exports = (msg) => {
    let userId = msg.author.id
    return status.getStatus(userId);
}