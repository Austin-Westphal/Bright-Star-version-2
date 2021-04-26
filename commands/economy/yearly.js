const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
   
        name: "yearly",
        aliases: ["year"],
        category: "economy",
        description: "Gives You 24000 for the year",
        usage: "yearly | year",
        accessableby: "everyone"
    ,
    run: async (bot, message, args) => {

        let user = message.author;
        let timeout = 31556952000;
        let amount = 24000;

        let yearly = await db.fetch(`yearly_${user.id}`);

        if (yearly !== null && timeout - (Date.now() - yearly) > 0) {
            let time = ms(timeout - (Date.now() - yearly));

            let timeEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You have already collected your yearly reward\n\nCollect it again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ You've collected your yearly reward of ${amount} coins`); 
            message.channel.send(moneyEmbed)
            db.add(`money_${user.id}`, amount)
            db.set(`yearly_${user.id}`, Date.now())


        }
    }
}