module.exports = (client,prefix,message) => {
    if(message.content.startsWith(prefix) && !message.author.bot) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        if(!client.command.has(commandName)) return;
        const command = client.command.get(commandName)
        try{
            command.execute(message,args,client)
        }catch(err){
            console.log(err)
            message.reply("Wystąpił błąd")
        }
    }
}