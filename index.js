const Discord = require('discord.js');
const bot = new Discord.Client();
var today = new Date();
let hour = today.getHours();
const suffix = "!";
const citations =[
    {sentence: 'Choisissez un travail que vous aimez et vous n’aurez pas à travailler un seul jour de votre vie.', author: 'Confucius'},
    {sentence: 'Celui qui sait qu’il a assez est riche.', author: 'Tao Te King'},
    {sentence: 'Qui regarde dehors rêve. Qui regarde à l’intérieur se réveille.', author: 'Karl Gustave Jung'},
    {sentence: 'La simplicité est la sophistication ultime.', author: 'Léonard de Vinci'},
    {sentence: ' Le bonheur c’est lorsque nos pensées, nos paroles et nos actes sont en harmonie.', author: 'Gandhi'}
]

bot.on('ready', () => {
    console.log(`Le bot est fonctionnel`);
});

bot.on("message", function (message) {
    if(message.content === suffix + "citPlease"){
        const fullCitations = citations.map(cit => cit.sentence + ' - ' + cit.author + ".");
        const randomCitations = fullCitations[Math.floor(Math.random() * fullCitations.length)];
        message.channel.send(randomCitations);
    }/* else if(message.content === suffix + "changeSuffix"){
        suffix = message.substring(14, 15);
        message.channel.send("Le nouveau suffix est :" + suffix);
    } */
    if(message.content === suffix + "roleList"){
        let embed = new discord.RichEmbed({
            "title": `Users with the ${roleName} role`,
            "description": membersWithRole.join("\n"),
            "color": 0xFFFF
        });
    }
})

bot.login('Confidentiel');
