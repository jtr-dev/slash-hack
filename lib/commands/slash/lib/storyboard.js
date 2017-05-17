
const storyboard = require('./storyboard.json')

const ran = (n) => (Math.floor(Math.random() * n))


module.exports = {
    getResponse: (step, action) => {
        if (action === "move"){
            let move = storyboard.dialogs[step][action] 
            return move[ran(move.length)]
        } 
        return storyboard.dialogs[step][action]
    }
}


/**
 * TODO: Add gold and stats
 *       Death script
 *       Carry % of gold onto onto new game+ in event of death 
 *       setTimeout for combat timer
 */