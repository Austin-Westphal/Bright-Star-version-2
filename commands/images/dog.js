const superagent = require("snekfetch");
const Discord = require('discord.js')


module.exports = {
  name: "dog",
  category: "images",
description: "Sends a random dog image",
usage: "dog",
run: async (client, message, args) => {
//command
superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle(":thumbsup:")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`🤣WHAT A DOG🤣`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};
