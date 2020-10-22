const settings = require("./settings.json");;
const Discord = require("discord.js");
const fs = require("fs");
const active = new Map();
const { GiveawaysManager } = require("discord-giveaways");
const readline = require('readline');
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
          return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} Geladen!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on('ready', () => {

  console.log(`=================================`);
  console.log(`Creator: Sundeep de Jongh`);
  console.log(`Library: Discord.js`);
  console.log(`Discord.js version: V11.6.3`);
  console.log(`=================================`);

bot.user.setStatus('dnd');
    setInterval(async ()=>{
        let textList = ['!help','Phasmophobia']
        var text = textList[Math.floor(Math.random() * textList.length)];
        bot.user.setActivity(text , { type: 'WATCHING' })
    },10000)
});

const manager = new GiveawaysManager(bot, {
    storage: "./giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: ["ADMINISTRATOR"],
        embedColor: "#fcfcfc",
        reaction: "🎉"
    }
});

bot.giveawaysManager = manager;


bot.on('guildMemberAdd', member => {

  const channel = member.guild.channels.get('767418530634924052');
  
  let joinMessage = new Discord.RichEmbed()
  .setAuthor("Phasmophobia » Welkom", bot.user.displayAvatarURL)
  .setColor("#fcfcfc")
  .setThumbnail(member.user.displayAvatarURL)
  .setDescription(`<@${member.user.id}>, Welkom op de discord server van **Phasmophobia**, We hopen dat je een fijne tijd hebt. Lees ook even de regels door om problemen te voorkomen!`)
  .setFooter(`${member.user.tag} is de server gejoined!`, member.user.displayAvatarURL)
  .setTimestamp();
  
  channel.send(joinMessage);

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = settings.prefix;
  if (!message.content.startsWith(prefix)) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  var options = {
    active: active
  
  }


  let commands = bot.commands.get(cmd.slice(prefix.length));
  if(commands) commands.run(bot,message,args,options);

  
});

bot.login(settings.token);