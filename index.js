const { Client, Intents, MessageEmbed } = require("discord.js");

const bot = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

bot.on("ready", () => {
  console.log(`Bot ${bot.user.tag} is logged in!`);
});

bot.login("OTU0NTE1MzkwMzA0NzUxNjk2.YjUPuw.dCAizD_T8xuSUBF_PRXYhkJgijA"); // Replace the macro with your token

bot.on("messageCreate", (message) => {
  if (message.author.bot) {
    // if message is bots, ignore it
    return;
  }

  // commands prompt
  if (message.content == "...commands") {
    const exampleEmbed = new MessageEmbed()
      .setColor("#1ede00")
      .setTitle("Server Commands")
      .setDescription("These are a list of the commands used on the server: ")
      .addFields({ name: "`...like`", value: "Likes the current message" });
    message.channel.send({ embeds: [exampleEmbed] });
  }

  // COMMANDS
  if (message.content == "...like") {
    message.react("👍");
  }

  // RESPONSES
  if (
    message.content.toLowerCase().includes("weed") ||
    message.content.toLowerCase().includes("ganja") ||
    message.content.toLowerCase().includes("boof") ||
    message.content.toLowerCase().includes("pot") ||
    message.content.toLowerCase().includes("mary jane") ||
    message.content.toLowerCase().includes("marijuana")
  ) {
    // check if message includes term
    message.react("🥦");
  }
});
