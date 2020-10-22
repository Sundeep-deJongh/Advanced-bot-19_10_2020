const Discord = require("discord.js");
const config = require("../settings.json");
const cmdname = require("../utils/cmdname.json");

module.exports.run = async (bot, message, args) => {

    let error = new Discord.RichEmbed()
    .setColor(config.colour)
    .setTitle("E R R O R")
    .setDescription(`:x: **Gebruik:** -${cmdname.addToTicket} @name#0000`);

    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let username = message.author.username;
    if(!user) return message.channel.send(error)

    let added = new Discord.RichEmbed()
    .setColor(config.colour)
    .setTitle("Member toegevoegd!")
    .setDescription(`${user} Is toegevoegd aan dit ticket door ${username}!`);

    if (!message.channel.name.startsWith("support")) return message.channel.send(":x: Gebruik dit command enkl in een ticket!");

    message.channel.overwritePermissions(user, {
        READ_MESSAGES: true,
        SEND_MESSAGES: true
    })

    message.channel.send(added);

}
module.exports.help = {
    name: cmdname.addToTicket
}