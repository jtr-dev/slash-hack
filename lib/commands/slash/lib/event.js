const storyboard = require('./storyboard'),
    status = require('./status'),
    userInfo = require('./userInfo');


const ran = (n) => (Math.floor(Math.random() * n + 1))

module.exports = (action, msg) => {
    const die = () => {
        status.updateStatus(userStatus.userId, 0)
        return "You have died!"
    }

    let userStatus = userInfo(msg)

    if (userStatus === undefined)
        return `Sorry, @${msg.author.username}, you're not recongized in this server ;(  \n Start a new game here!`

    if (action === "look") {
        return storyboard.getResponse(userStatus.step, action)
    } else {
        let combatChance = ran(100000);
        if (combatChance < 90000 || combatChance > 10000) {
            let combatTimer = ran(10) + 2.50
            setTimeout(() => die(), (combatTimer * 1000))
            return ` ${storyboard.getResponse(userStatus.step, action)}
                You have ${combatTimer} seconds to react or die!`
        }
        status.updateStatus(userStatus.userId, (userStatus.step === 0)
            ? userStatus.step + 1
            : userStatus.step - 1)

        return storyboard.getResponse(userStatus.step, action)
    }


}

