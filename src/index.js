const mineflayer = require('mineflayer')
require('dotenv').config()


const { HOST, USERNAME, PASSWORD, AUTH_PROVIDER, HOST_PORT } = process.env

const bot = mineflayer.createBot({
	host: HOST,
	username: USERNAME,
	password: PASSWORD,
	auth: AUTH_PROVIDER,
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)