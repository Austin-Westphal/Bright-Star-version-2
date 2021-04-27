const db = require('quick.db');
const { default_prefix } = require('../../config.json');
const Discord = require('discord.js');
module.exports = {
    name: "setprefix,
    alias: ['setpre'],
    deskripsi: 'Mengganti prefix guild',
    usage: 'prefix <new-prefix>',

    /**
     * @param {import('discord.js').Client} client
     * @param {import('discord.js').Message} message
     * @param {Array[]} args
     */
    run: (client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have the right permissions to use this command!');
        if (!args[0]) {
            const embed1 = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Prefix Command Details')
                .setDescription('Set the Server Prefix.')
                .addField('**Default Prefix**', `${default_prefix}`)
                .addField('**Usage**', `${default_prefix} prefixset <prefix>`)
                .addField('**Reset Prefix**', 'Botprefix **prefixreset**');
            return message.channel.send(embed1);
        }

        if (args[1]) return message.channel.send('Prefix harus satu kata saja');
        if (args[0].length > '3') return message.channel.send('Mohon masukan maksimal 3 kata doang');

        db.set(`prefix_${message.guild.id}`, args[0]);
        const embed = new Discord.MessageEmbed()
            .setTitle('Message Prefix')
            .setColor('RANDOM')
            .setDescription(`Prefix Bot Set To \`${args[0]}\``)
            .setTimestamp();
        return message.channel.send(embed);
    }
};
