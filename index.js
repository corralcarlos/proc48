// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});
client.on("message", (message)=>{
	if (message.content.startsWith("ping")){
		message.channel.send("pong")
	}
})
// Login to Discord with your client's token
client.login(token);