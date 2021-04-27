// const { MessageEmbed, Client } = require("discord.js")

// module.exports = {
//     name: 'idban',
//     description: "Ban an ID",
//     category: "testing",
//     usage: "[prefix]idban <userID> <reason>",
//     aliases: ['forcedban', 'idban'],
//     run: async (client, message, args) => {

//         if (!message.member.hasPermission('BAN_MEMBERS')) {
//             const forcebanError = new MessageEmbed()
//                 .setDescription(`You dont\'t have the permission to ban members. The permission __**Ban Members**__ must be enabled for server staff that the server owner(s) allow to use the ban command(s)//features.`)
//                 .setColor("RED")

//             return message.channel.send(forcebanError)
//         }

//         let userID = args[0];
//         let reason = args.slice(1).join(" ") || 'Not Specified'

//         if (!userID) {
//             const forcebanError2 = new MessageEmbed()
//                 .setDescription(`You Need to provide a User ID`)
//                 .setColor("RANDOM")

//             return message.channel.send(forcebanError2)
//         }
//         if (isNaN(args[0])) {
//             const forcebanError3 = new MessageEmbed()
//                 .setDescription(`The Specified User ID is not Valid. Please Try again, if you continue to have this issue, please send __**Trust In God#3389**__`)
//                 .setColor("RANDOM")

//             return message.channel.send(forcebanError3)
//         }
//         if (userID === message.author.id) {
//             const forcebanError4 = new MessageEmbed()
//                 .setDescription(`You can\'t ban yourself!`)
//                 .setColor("RANDOM")
//             return message.channel.send(forcebanError4)
//         }
//         if (userID === client.user.id) {
//             const forcebanError5 = new MessageEmbed()
//                 .setDescription(`Why would I want to ban myself... It would make no sense lol.`)
//                 .setColor("RANDOM")
//             return message.channel.send(forcebanError5)
//         }

//         if (message.guild.member(userID)) {
//             const forcebanError6 = new MessageEmbed()
//                 .setDescription(`The specified member is already in the server. Use \`ban\` command instead.`)
//                 .setColor("RANDOM")
//             return message.channel.send(forcebanError6)
//         }

//         client.users.fetch(userID).then(async user => {
//             await message.guild.members.ban(user.id, { reason: reason })
//             const embed = new MessageEmbed()
//             .setTitle(`Ban Successful`)
//             .setDescription(`**${user.tag}** has been banned, from the server! \n **Reason:** ${reason}`)
//             .setColor("RANDOM")

//             return message.channel.send(embed)
//         }).catch(error => {
//             const errorEmbed = new MessageEmbed()
//             .setDescription(error)
//             .setColor("RANDOM")
//             return message.channel.send(errorEmbed)
//         })

//     }
// }
