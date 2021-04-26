const { MessageEmbed } = require("discord.js");
const config = require('../../config.json');
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    
        name: "hourly",
        aliases: ["hour"],
        category: "economy",
        description: "Gives You 100 per hour",
        usage: "hourly | hour",
        accessableby: "everyone"
  ,
    run: async (bot, message, args) => {
        let user = message.author;

        let timeout = 3600000;
        let amount = 100;

        let hourly = await db.fetch(`hourly_${user.id}`);

        if (hourly !== null && timeout - (Date.now() - hourly) > 0) {
            let time = ms(timeout - (Date.now() - hourly));

            let timeEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You've already collected your hourly reward\n\nCollect it again in ${time.hours}h ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ You've collected your hourly reward of ${amount} coins`);
            message.channel.send(moneyEmbed)
            db.add(`money_${user.id}`, amount)
            db.set(`hourly_${user.id}`, Date.now())


        }
    }
}