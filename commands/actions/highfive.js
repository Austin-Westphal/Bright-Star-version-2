// const discord = require("discord.js");
// const { Random } = require("something-random-on-discord");
// const random = new Random();

// module.exports = {
//   name: "highfive",
//   category: "actions",
//   description: "high five someone",
//   run: async (client, message, args) => {
    
//     let target = message.mentions.members.first()
    
//     let data = await random.getAnimeImgURL("high five");
    
//     let embed = new discord.MessageEmbed()
//     .setImage(data)
//     .setColor("RANDOM")
//     .setFooter(`${message.author.username} high fives ${target.user.username}`)
//     .setTimestamp()
    
//     message.channel.send(embed);
//   }
// };