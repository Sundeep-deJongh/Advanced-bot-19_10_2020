const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    var idee = args.join(" ");

    let errorEmbed = new Discord.RichEmbed()
    .setAuthor("Phasmophobia » Suggestie")
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor("#fcfcfc")
    .setDescription("Je mist het argument ||<idee>|| | Gebruik ||!idee (Idee)||.")
    .setFooter("ERROR: 404")
    .setTimestamp();

    if (!idee) return message.channel.send(errorEmbed); 

    var eindEmbed = new Discord.RichEmbed()
    .setAuthor("Phasmophobia » Suggestie", message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setDescription("Je hebt een idee ingestuurd in **SCS Development** zie de onderstaande informatie.")
    .setColor("#fcfcfc")
    .addField("Suggestie: ", idee)
    .setFooter(`Prachtig idee :)`)
    .setTimestamp();

    message.author.send(eindEmbed);

    var ideeEmbed = new Discord.RichEmbed()
    .setAuthor("Phasmophobia » Suggestie", message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor("#fcfcfc")
    .addField("Suggestie: ", idee)
    .addField("Ingezonden door:", message.author)
    .setFooter(`Prachtig idee :)`)
    .setTimestamp();
 
        var ideeChannel = message.guild.channels.get(`768418827335237633`);
        if(!ideeChannel) return message.guild.send("Kan geen kanaal met de naal ``「💡」ideeën`` vinden.");
 
    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('✅');
        embedMessage.react('❌');

        var embed = new Discord.RichEmbed()
        .setDescription(`**Je hebt succesvol een idee verstuurd :tada:**`)
        .setColor("#fcfcfc")     

        message.channel.send(embed);


    });
 
}

module.exports.help = {
    name: "idee"
}