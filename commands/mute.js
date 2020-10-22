const Discord = require("discord.js");
const config = require("../settings.json");
const cmdname = require("../utils/cmdname.json");
const cases = require("../utils/cases.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    message.delete();
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("Je hebt niet de juiste rechten voor dit command!");

    let caseID = cases[0].caseID;
    let nought = 4-(caseID.toString().length);
    let nought1 = "0".repeat(nought);

    let mutedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!mutedUser) return message.channel.send(`:x: **Gebruik**: !${cmdname.mute} (@user) (reason)`)
    let mutedReason = args.join(" ").slice(22);
    if (!mutedReason) return message.channel.send(`:x: **Gebruik**: !${cmdname.mute} (@user) (reason)`)
    let punishmentchannel = message.guild.channels.find(pc => pc.name === config.punishLogName)
    if (!punishmentchannel) return message.channel.send("Kanaal bestaat niet!")
    let mutedRole = message.guild.roles.find(mr => mr.name === config.mutedRoleName)
    if (!mutedRole) return message.channel.send("Mute role bestaat niet!")
    
    let avatar2 = message.author.avatarURL;
    let muted = new Discord.RichEmbed()
    .setColor(config.colour)
    .setTitle(`Member gemute!`)
    .addField("Gemute Member", mutedUser, true)
    .addField("Case ID", `${nought1}${caseID}`, true)
    .addField("Reden", mutedReason)
    .setFooter(`Uitgevoerd door: ${message.author.tag}`, avatar2)
    mutedUser.addRole(mutedRole.id)
    punishmentchannel.send(muted);

    cases[0].caseID++;
    fs.writeFile("./cases.json", JSON.stringify(cases), (err) => {
        if(err) console.log(err)
    })

}
module.exports.help = {
    name: cmdname.mute
}