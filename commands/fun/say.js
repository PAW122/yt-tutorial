const Discord = require("discord.js")
const help_embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("say")
    .setFields(
        {name: "$say", value: "send messages as bot"},
        {name: "usage", value: "$say tour message"}
    )

module.exports = {
    name: "say",
    help: help_embed,

    execute: async (message, args, client) => {
        const content = message.content.slice(4)
        if (content.length < 1) return message.reply("Nie mogę wysłać pustej wiadomości")
        message.channel.send(content)
        message.delete()
    }
}