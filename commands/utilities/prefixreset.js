const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "prefixreset",
    alias: ['deleteprefix'],
    category: "utilities",
    deskripsi: 'Menghapus prefix server',
    usage: 'prefix <new-prefix>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have the correct perms to use this command.');
        db.delete(`prefix_${message.guild.id}`);
        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('✅ Prefix Reset')
            .setDescription('Prefix Reset to Default Prefix of +');
        return message.channel.send(embed);
    }
};
