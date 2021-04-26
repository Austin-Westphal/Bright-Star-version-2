// const discord = require("discord.js");
// const { Random } = require("something-random-on-discord");
// const random = new Random();

// module.exports = {
//   name: "stare",
//   category: "actions",
//   description: "stare at someone",
//   run: async (client, message, args) => {
    
//     let target = message.mentions.members.first()
    
//     let data = await random.getAnimeImgURL("stare");
    
//     let embed = new discord.MessageEmbed()
//     .setImage(data)
//     .setColor("RANDOM")
//     .setFooter(`${message.author.username} stares at ${target.user.username}`)
//     .setTimestamp()
    
//     message.channel.send(embed);
//   }
// };