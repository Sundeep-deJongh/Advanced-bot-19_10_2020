const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor("SCS Developement » Avatar")
    .setColor("#7289DA")
    .setDescription(message.author.displayAvatarURL)
    .setFooter("© SCS Developement - 2020", bot.user.displayAvatarURL)
    .setTimestamp();

    message.channel.send(embed);

}

module.exports.help = {
    name: "avatar"
}