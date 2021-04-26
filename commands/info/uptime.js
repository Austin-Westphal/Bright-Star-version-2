const Discord = require('discord.js');
const config = require('../../config.json');
const moment = require("moment");
require('moment-duration-format')


module.exports = {
  name: "uptime",
  aliases: ["up", "stats"],
  usage: "uptime",
  description: "View the time the bot has been online",
  category: "info",
  run: async (client, message, args) => {
        //const prefix = config.prefix
        //if (!message.content.startsWith(prefix)) return;

        let uptime = moment.duration(client.uptime).format("D [ days] h[ hours] m[ minutes] s[ seconds]")

        const duration = moment.duration(client.uptime)
    let bicon = client.user.displayAvatarURL()
    const botembed = new Discord.MessageEmbed()
        .setTitle("Bright Star")
        .setColor(config.embedcolor)
        .setDescription(`❗ **Bright Star has been active for** \`${uptime}\`. \n ❗ **The ping is currently** \`${client.ws.ping} ms\`. \n\n`)
        .setTimestamp()
        .setFooter('© 2021 Bright Star')
        .setThumbnail(bicon);
 message.react ('727551598640889896')
    message.channel.send(botembed);
    }
}