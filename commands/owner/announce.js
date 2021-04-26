const Discord = require("discord.js");

module.exports = {
    name: "announce",
    category: "owner",
    description: "Make an Announcemnet in your Server",
    run: async (client, message, args) => {
        const anchannel = message.mentions.channels.first();
        if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("You don't have enogh Permissions")
        }
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("I don't have enough Permissions")
        }
        if (!anchannel) {
        return message.channel.send("`Usage: +announce <channel> <msg>`")
        }
        if (!args.slice(1).join(" ")) {
        return message.channel.send("Please add some text to make an Announcement")
        }

        let embed = new Discord.MessageEmbed()
        .setTitle(`New Server Announcement`)
        .setDescription(args.slice(1).join(" "), { allowedMentions: { parse:["users"] } })
        .setColor("RANDOM")
        .setFooter(`Announcement by ${message.author.username}`);
        anchannel.send(embed);
    
        let anembed = new Discord.MessageEmbed()
        .setTitle("Done!")
        .setDescription (`Announcement has been sent to ${anchannel}`)
        .setColor("RANDOM");

        message.channel.send(anembed);
        message.delete();
    }
}