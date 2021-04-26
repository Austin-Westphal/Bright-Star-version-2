const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
   
        name: "monthly",
        aliases: ["month"],
        category: "economy",
        description: "Gives You 10000 each month",
        usage: "monthly | month",
        accessableby: "everyone"
    ,
    run: async (bot, message, args) => {

        let user = message.author;
        let timeout = 2592000000;
        let amount = 10000;

        let monthly = await db.fetch(`monthly_${user.id}`);

        if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
            let time = ms(timeout - (Date.now() - monthly));

            let timeEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You have already collected your monthly reward\n\nCollect it again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ You've collected your monthly reward of ${amount} coins`); 
            message.channel.send(moneyEmbed)
            db.add(`money_${user.id}`, amount)
            db.set(`monthly_${user.id}`, Date.now())


        }
    }
}