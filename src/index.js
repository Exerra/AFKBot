const mineflayer = require('mineflayer')
require('dotenv').config()


const { HOST, USERNAME, PASSWORD, AUTH_PROVIDER, HOST_PORT } = process.env
const init = async () => {

	const bot = await mineflayer.createBot({
		host: HOST,
		username: USERNAME,
		password: PASSWORD,
		auth: AUTH_PROVIDER,
		physicsEnabled: true
	})

	function lookAtNearestPlayer() {
		const playerEntity = bot.nearestEntity()

		if (!playerEntity) return;

		const pos = playerEntity.position
		bot.lookAt(pos)
	}

	bot.on('physicTick', () => {

		lookAtNearestPlayer()
	})

	// Log errors and kick reasons:
	bot.on('kicked', console.log)
	bot.on('error', console.log)
}

init()