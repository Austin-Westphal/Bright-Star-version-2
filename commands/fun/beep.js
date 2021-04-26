module.exports = {
  name: "beep",
  description: "Beep!",
  category: "fun",
  execute(message, args) {
    message.channel.send("Boop!");
  },
};