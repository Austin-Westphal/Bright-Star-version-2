const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const { default_prefix } = require('../../config');

module.exports = {
    
        name: "buy",
        alias: [],
        category: "economy",
        description: "buys items",
        usage: "item",
        accessableby: "everyone"
    ,
    run: async (bot, message, args) => {
        let user = message.author;

        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = default_prefix
        } else {
            prefix = fetched
        }
      
        let author = db.fetch(`money_${user.id}`)

        let Embed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`❌ You need 200 coins to purchase Bronze VIP`);


        if (args.join(' ').toLocaleLowerCase() == 'bronze') {
            if (author < 200) return message.channel.send(Embed)

            await db.fetch(`bronze_${user.id}`);
            db.set(`bronze_${user.id}`, true)

            let Embed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased Bronze VIP For 200 Coins`);

            db.subtract(`money_${user.id}`, 200)
            message.channel.send(Embed2)
        } else if (args.join(' ').toLocaleLowerCase() == 'banknote') {
            let Embed3 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You need 2600 coins to purchase a Bank Note`);

            if (author < 2600) return message.channel.send(Embed3)

            await db.fetch(`nikes_${user.id}`)
            db.add(`nikes_${user.id}`, 1)

            let Embed4 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased a Bank Note For 2600 Coins`);

            db.subtract(`money_${user.id}`, 2600)
            message.channel.send(Embed4)
        } else if (args.join(' ').toLocaleLowerCase() == 'car') {
            let Embed5 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You need 800 coins to purchase a new car`);

            if (author < 800) return message.channel.send(Embed5)

            await db.fetch(`car_${user.id}`)
            db.add(`car_${user.id}`, 1)

            let Embed6 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased A New Car For 800 Coins`);

            db.subtract(`money_${message.guild.id}_${user.id}`, 800)
            message.channel.send(Embed6)
        } else if (args.join(' ').toLocaleLowerCase() == 'mansion') {
            let Embed7 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You need 350000 coins to purchase a Mansion`);

            if (author < 350000) return message.channel.send(Embed7)

            await db.fetch(`house_${user.id}`)
            db.add(`house_${user.id}`, 1)

            let Embed8 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased A Mansion For 350,000 Coins`);

            db.subtract(`money_${user.id}`, 350000)
            message.channel.send(Embed8)
      } else if (args.join(' ').toLocaleLowerCase() == 'soda') {
            let Embed7 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You need 150 coins to purchase a soda`);

            if (author < 150) return message.channel.send(Embed7)

            await db.fetch(`house_${user.id}`)
            db.add(`house_${user.id}`, 1)

            let Embed8 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased A Soda For 150 Coins`);

            db.subtract(`money_${user.id}`, 150)
            message.channel.send(Embed8)
        } else if (args.join(' ').toLocaleLowerCase() == 'padlock') {
            let Embed7 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You need 500 coins to purchase a padlock`);

            if (author < 500) return message.channel.send(Embed7)

            await db.fetch(`house_${user.id}`)
            db.add(`house_${user.id}`, 1)

            let Embed8 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased A padlock For 500 Coins`);

            db.subtract(`money_${user.id}`, 500)
            message.channel.send(Embed8)
        } else {
            if (message.content.toLowerCase() === `${prefix}buy`) {
                let embed9 = new MessageEmbed()
                    .setColor("GREEN")
                    .setDescription(`❌ Enter An Item To Buy!\nType ${prefix}shop To See List Of Items!`)
                return message.channel.send(embed9)
            }
        }
    }
}