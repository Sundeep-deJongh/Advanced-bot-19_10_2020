const discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.guild.createChannel(`support-` + message.author.username, 
        {
        type: 'text', 
        permissionOverwrites: [
                {
                 id: "348522827269537793", 
                allow: ['VIEW_CHANNEL'],
                },
                {
                 id: "767097800881733653", 
                allow: ['VIEW_CHANNEL'],
                },
                {
                id: message.author.id,
                allow: ['VIEW_CHANNEL']
                }, 
                {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL']
                }
                ]
        })
               .then(channel => {
                channel.setParent("768419131652964362")

                let Embed = new discord.RichEmbed()
                .setTitle("Phasmophobia » Support ticket")
                .setThumbnail(bot.user.displayAvatarURL)
                .setColor("#fcfcfc")
                .setDescription(`Bedankt <@${message.author.id}> voor het maken van een ticket,\nJe wordt zo snel mogelijk geholpen door 1 van onze support leden.`)
                .setFooter("© Phasmophobia - 2020")
                .setTimestamp();

                channel.send(Embed);
    })

    let embed2 = new discord.RichEmbed()
    .setDescription(`:white_check_mark: <@${message.author.id}> Je ticket is succesvol gemaakt!`)
    .setColor("#fcfcfc")

    message.channel.send(embed2);
}

module.exports.help = {
    name: "ticket"
}