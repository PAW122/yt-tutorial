module.exports = {
    name: "ping",

    execute:async(message,args,client) => {
        message.reply("Pong!")
    }
}