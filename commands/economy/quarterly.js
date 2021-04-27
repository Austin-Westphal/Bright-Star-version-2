const { MessageEmbed } = require("discord.js");
const config = require('../../config.json');
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
    
        name: "quarterly",
        aliases: ["quart"],
        category: "economy",
        description: "Gives You 1,750 per 3 months",
        usage: "+quarterly",
        accessableby: "everyone"
  ,
    run: async (bot, message, args) => {
        let user = message.author;

        let timeout = 7889400000;
        let amount = 1750;

        let quarterly = await db.fetch(`quarterly_${user.id}`);

        if (daily !== null && timeout - (Date.now() - quarterly) > 0) {
            let time = ms(timeout - (Date.now() - quarterly));

            let timeEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You've already collected your quarterly reward\n\nCollect it again in ${time.hours}h ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ You've collected your quarterly reward of ${amount} coins`);
            message.channel.send(moneyEmbed)
            db.add(`money_${user.id}`, amount)
            db.set(`quarterly_${user.id}`, Date.now())


        }
    }
}
