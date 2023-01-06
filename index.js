const Discord = require("discord.js");
const config = require("./conf.json")
const token = config.token
const prefix = config.prefix

const handler = require("./handlers/handler")
const msg_handler = require("./handlers/msg_handler")

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

handler(client)

client.once('ready', () => {
    console.log("Bot jest Online!")
});

client.on('messageCreate', async message => {
    msg_handler(client,prefix,message)
})

client.login(token)