const Discord = require("discord.js")
module.exports = {
    name: "help",

    execute:async(message,args,client) => {

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Help")
        .setFields(
            {name: "Fun",value: "``say``"},
            {name: "Info",value: "``help``,``ping``"}
        )

        if(!args[0]) {
            return message.reply({embeds:[embed]})
        }else{
            const commandName = args[0]
            if(!client.command.has(commandName)) return message.reply("I dont found this command. \n Try use $help")
            const command = client.command.get(commandName);
            if(!command.help) return message.reply("This command dont have help description");
            const embed = command.help
            message.reply({embeds: [embed]})
        }

    }
}

//$help
//$help ping