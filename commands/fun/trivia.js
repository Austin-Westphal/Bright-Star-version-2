const { MessageEmbed } = require("discord.js");
let questions = [
  {
    title: "Best programming language",
    options: ["JavaScript/TypeScript", "Python", "Ruby", "Rust"],
    correct: 1,
  },
  {
    title: "Best NPM package",
    options: ["int.engine", "ms", "ws", "discord.js"],
    correct: 3,
  },
  {
    title: "Who coded this bot",
    options: ["SSundee", "Trust In God", "Patty_Mayo", "Radex"],
    correct: 2,
  },
  {
    title: "What year did Trust In God Originally join discord",
    options: ["2020", "2016", "1999", "2015"],
    correct: 2,
  },
  {
    title: "What genre of music does Trust In God (Austin Westphal is the real name) produce",
    options: ["Rap", "Christian", "Pop", "Dubstep"],
    correct: 2,
  },
];
module.exports = {
  name: "trivia",
  description: "Test your knowledge!",
  category: "fun",
  run: async (bot, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`GREEN`)
      .setFooter(
        `Reply to this message with the correct question number! You have 60 seconds.`
      );
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 60000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`You got it correct!`);
      } else {
        return message.channel.send(`You got it incorrect.`);
      }
    } catch (e) {
      return message.channel.send(`You did not answer!`);
    }
  },
};
