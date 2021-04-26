exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  try {
    client.fetchApplication('@me').then(app => {
      let embed = new client.Embed('blend', {
        title: app.name,
        thumbnail: app.iconURL,
        description: app.description,
        fields: [
          {
            title: 'ID',
            text: app.id,
            inline: true
          },
          {
            title: 'Public',
            text: app.botPublic,
            inline: true
          },
          {
            title: 'Created At',
            text: app.createdAt
          },
          {
            title: 'Owner',
            text: app.owner.tag
          }
        ]
      });

      message.channel.send(embed);
    });
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

module.exports.config = {
  enabled: true,
  aliases: ['app'],
  guildOnly: false,
  permLevel: 'User'
};

module.exports = {
  name: 'application',
  category: 'general',
  description: 'application',
  usage: 'application'
};