const Discord = require("discord.js");
const config = require("../settings.json");
const cmdname = require("../utils/cmdname.json");

module.exports.run = async (bot, message, args) => {

    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Je hebt geen rechten tot dit command!");

    let mutedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!mutedUser) return message.channel.send(`:x: **Gebruik**: !${cmdname.unmute} (@user) (reden)`)
    let mutedRole = message.guild.roles.find("MUTE")
    if (!mutedRole) return message.channel.send("Muted role could not be found!")

    if (!mutedUser.roles.has(mutedRole.id)) return message.channel.send(":x: Member is niet gemute!");

    mutedUser.removeRole(mutedRole.id);
    message.channel.send(mutedUser + " is succesvol geunmute!");


}
module.exports.help = {
    name: cmdname.unmute
}