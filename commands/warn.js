const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./history.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  const answers = [

    '38946',
    '56767',
    '67678',
    '893469',
    '38948934',
    '283028300',
    '0278302',
    '93984693',
    '65345906',
    '3457498567',
    '34873',
    '0707394834',
    '3907402',
    '0739347',
    '2303740734507',
    '0934704707',
    '9236283343',
    '39074093742'

];

if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("**JE MAG DIT NIET**");
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if(!wUser) return message.reply("**KAN GEEN PERSOON VINDEN**");
if(wUser.hasPermission("MANAGE_MESSAGES"))  return("**ACCESS DENIED**")
let reason = args.join(" ").slice(22);
if(!warns[wUser.id]) warns[wUser.id] = {

    warns: 0

  };
  warns[wUser.id].warns++;

  fs.writeFile("./history.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });
  
  let warnEmbed = new Discord.RichEmbed()

  .setDescription("Waarschuwing")
  .setThumbnail(bot.user.displayAvatarURL)
  .setAuthor(message.author.username)
  .setColor("#fcfcfc")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Appeal-ID", `${answers[~~(Math.random() * answers.length)]}`)
  .addField("reden", reason)
  .setFooter("© Phasmophobia - 2020", bot.user.displayAvatarURL)

  let warnchannel = message.guild.channels.find(`name`, "logs");
  if(!warnchannel) return message.reply("kan geen log kanaal vinden");

  warnchannel.send(warnEmbed);

  let membersEmbed = new Discord.RichEmbed()
  .setDescription(`:rotating_light: **<@${wUser.id}> is gewarned door ${message.author} voor ${reason}**`)
  .setColor("#fcfcfc")

  message.channel.send(membersEmbed);

}

module.exports.help = {

  name: "warn"

}