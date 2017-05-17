// get status from DB
let status = []

// lets define fake data for status
module.exports = {
    updateStatus: (userId, step) => {
        let id = module.exports.getStatus(userId);
        if (id === undefined) {
            status.push({
                userId: userId,
                step: step
            })
        }else{
            id.step = step
        }
    },
    getStatus: (userId) => {
        return status.find(x => x.userId === userId)
    }
}
