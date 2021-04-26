const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "bloodsuck",
  category: "actions",
  description: "slap someone",
  run: async (client, message, args) => {
    
    let target = message.mentions.members.first()
    
    let data = await random.getAnimeImgURL("bloodsuck");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`${message.author.username} bloodsucks ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};