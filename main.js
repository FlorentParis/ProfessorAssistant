const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

bot.on('ready', () => {
    console.log(`Le bot est fonctionnel`);
});

bot.on('message', (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let listePresent = [];
    let listeAbsent = [];
    let listeAppel = ["Duty"];

    if(command === "ping"){ 
        message.channel.send("pong!"); 
    } else if (command === "asl") {
        let [age, sex, location] = args;
        message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
    } else if(command === "begin"){
        message.channel.send("Le cours va bientot commencer ! Signalez votre presence ↓")
        .then(message => {
            message.react("🤚");
            bot.on('messageReactionAdd', (reaction, user) => {
                if(reaction.emoji.name === "🤚" && user.id !== bot.user.id){
                    listePresent += user.username;
                    message.channel.send(listePresent);
                    return listePresent;
                }
            });
        });
    } else if(command === "end"){
        message.channel.send("Merci d'avoir suivi ce cours !")
        listeAppel.forEach(element => {
            if(listePresent.includes(element)){
                listeAppel -= element.value;
                message.channel.send(element + "true");
            }else{
                listeAbsent += element.value;
                message.channel.send(element + "false");
                console.log(listePresent);
            }
        });
        message.channel.send(listeAppel + "fin");
    }
});
   
bot.login(config.token);