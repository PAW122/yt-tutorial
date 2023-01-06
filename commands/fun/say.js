module.exports = {
    name: "say",

    execute: async (message, args, client) => {
        const content = message.content.slice(4)
        if (content.length < 1) return message.reply("Nie mogę wysłać pustej wiadomości")
        message.channel.send(content)
        message.delete()
    }
}