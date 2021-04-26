// const discord = require("discord.js");
// const { Random } = require("something-random-on-discord");
// const random = new Random();

// module.exports = {
//   name: "smile",
//   category: "actions",
//   description: "smile at someone",
//   run: async (client, message, args) => {
    
//     let target = message.mentions.members.first()
    
//     let data = await random.getAnimeImgURL("smile");
    
//     let embed = new discord.MessageEmbed()
//     .setImage(data)
//     .setColor("RANDOM")
//     .setFooter(`${message.author.username} smiles at ${target.user.username}`)
//     .setTimestamp()
    
//     message.channel.send(embed);
//   }
// };