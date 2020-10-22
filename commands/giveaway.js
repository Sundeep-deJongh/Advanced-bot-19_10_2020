const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Oeps! Jij mag dit niet!");

    if (args[0] && args[1] && args[2]) {
        message.delete().catch(() => {});
        const item = args.slice(2).join(" ");
        const winnersCount = args[0];
        const secondsForGiveaway = args[1];

        await bot.giveawaysManager.start(message.channel, {
            time: ms(secondsForGiveaway),
            prize: item,
            winnerCount: parseInt(winnersCount),
            messages: {
                giveaway: "🎉🎉 **GIVEAWAY** 🎉🎉",
                giveawayEnded: "🎉🎉 **GIVEAWAY GEËINDIGD** 🎉🎉",
                timeRemaining: "Tijd te gaan: **{duration}**!",
                inviteToParticipate: "Reageer met 🎉 om deel te nemen!",
                winMessage: "Gefeliciteerd, {winners}! Je won **{prize}**!",
                embedFooter: "Giveaways",
                noWinner: "Giveaway geannuleerd, niet genoeg deelnemers.",
                winners: "winnaar(s)",
                endedAt: "Eindigd op",
                units: {
                    seconds: "seconden",
                    minutes: "minuten",
                    hours: "uren",
                    days: "dagen"
                }
            }
        });
    } else {
        message.reply("Gebruik !giveaway ``AantalWinnaars`` ``Tijd`` ``Item``");
    }
}

module.exports.help = {
    name: "giveaway"
}