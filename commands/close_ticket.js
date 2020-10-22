const Discord = require("discord.js");
const config = require("../settings.json");
const cmdname = require("../utils/cmdname.json");

module.exports.run = async (bot, message, args) => {

    let ticketerror = new Discord.RichEmbed()
    .setColor(config.colour)
    .setTitle(`TICKET_CLOSE ERROR!`)
    .setDescription(":x: Je kan dit enkel in een ticket doen!")
    .setTimestamp();

    if(!message.channel.name.startsWith("support")) return message.channel.send(":x: Je kan dit enkel in een ticket doen!");
    
    let confirm = new Discord.RichEmbed()
    .setColor(config.colour)
    .setTitle(`Zeker weten?`)
    .setDescription("Wanneer je op :white_check_mark: druk, Wordt dit kanaal gesloten en valt dit niet meer terug te draaien!")
    .setTimestamp();

    message.channel.send(confirm)
    .then ((m => {
        m.react('✅').then(() => m.react('❌'));

        const filter = (reaction, user) => {
            return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        m.awaitReactions(filter, { max: 1, time: 20000, errors: ['time']})
        .then(collected => {
            const reaction = collected.first();

            let ticketclose = new Discord.RichEmbed()
            .setColor(config.colour)
            .setTitle(`TICKET_CLOSE UITGEVOERD!`)
            .setDescription("TICKET_CLOSE | Bevestigd --> Ticket wordt binnen 10 seconden gesloten!!")
            .setTimestamp();
            

            if (reaction.emoji.name === '✅') {
                m.channel.send(ticketclose)
                var interval = setInterval(function() {
                    message.channel.delete()
                    clearInterval(interval);
                }, 10 * 1000);
            } else {
                m.delete();
                m.channel.send(`Error 782 is opgetreden probeer \`/${cmdname.closeticket}\` nog een keer!`);
            }
        })
    }))

}
module.exports.help = {
    name: cmdname.closeticket
}