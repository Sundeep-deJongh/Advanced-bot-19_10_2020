const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    
    let embed = new Discord.RichEmbed()

    .setTitle("SC Development - HelpMenu")
    .setColor("#7289DA")
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("🌟Algemene commands", "/account - Zie je account informatie\n/avatar - Vraag je profielfoto op\n/help - Krijg dit menu\n/idee - laat een suggestie achter\n/members - zie het aantal discord leden",)
    .addField("🎫Ticket commands", "/ticket - maak een ticket\n/add - voeg een member toe aan een ticket\n/remove - verwijder een member van een ticket\n/close - sluit een ticket\n/setonderwerp - pas het onderwerk van een ticket aan")
    .addField("🧭Admin commands", "/ban - verban een gebruiker\n/kick - kick een gebruiker\n/mute - mute een gebruiker\n/drop - special giveaway\n/giveaway - maak een giveaway\n/lock - vergrendel een kanaal\n/unlock - ontgrendel eeen kanaal\n/pm - verstuur via de bot een prive bericht naar een gebruiker\n/melding - verstuur een update", true)
    .setFooter("© SCS Development - 2020", bot.user.displayAvatarURL)
    .setTimestamp();

    message.channel.send(embed).then(embedMessage => {
        embedMessage.react('✅');
    })
}

module.exports.help = {
    name: "help"
}