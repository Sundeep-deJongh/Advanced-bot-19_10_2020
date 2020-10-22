const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    let lead = message.guild.roles.get(`767097699631497267`)

    const errorEmbed = new Discord.RichEmbed()
    .setDescription(":x: Enkel management en hoger kan dit command uitvoeren!")

    if (!message.member.roles.has(lead.id)) return message.channel.send(errorEmbed)

    const embed = new Discord.RichEmbed()
    .setTitle(`Phasmophobia » Update`)
    .setColor("#fcfcfc")
    .setThumbnail(bot.user.displayAvatarURL)
    .setDescription(args.join(" "))
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
    .setTimestamp();

    let update = message.guild.channels.get('767103358954897408')
    if (!update) return message.channel.send("Kan het kanaal 『📣』nieuws niet vinden.")

    update.send(embed);

    const EindEmbed = new Discord.RichEmbed()
    .setDescription(`:white_check_mark: Succesvol een melding verzonden naar <#${update.id}>!`)

    message.channel.send(EindEmbed);

}

module.exports.help = {
    name: "melding"
}