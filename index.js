const { Client, Intents, MessageEmbed } = require("discord.js");
const cron = require("node-cron");
require("dotenv").config();

const bot = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

bot.on("ready", () => {
  console.log(`Bot ${bot.user.tag} is logged in!`);

  // scheduled tasks
  const channel = bot.channels.cache.get("975915017797009478");

  // 4:10 P.M.
  cron.schedule("0 10 16 * * *", function () {
    channel.send(
      "@420 ITS 4:10. ROLL YOUR JOINTS, PACK YOUR BOWLS, AND GRAB A SNACK. YOU STILL HAVE 10 MINUTES, SO MAYBE PROCRASITNATE FOR 8 OF THEM INSTEAD 🌿🌿🌿"
    );
  });

  // 4:15 P.M.
  cron.schedule("0 15 16 * * *", function () {
    channel.send("@420 ITS 4:15. GET YOUR ASS READY TO SMOKE 🌿🌿🌿");
  });

  // 4:20 P.M.
  cron.schedule("0 20 16 * * *", function () {
    channel.send("@everyone ITS 4:20 😮‍💨");
  });
});

bot.login(process.env.BOT_TOKEN);

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
    // check if message includes term
    message.content.toLowerCase().includes("weed") ||
    message.content.toLowerCase().includes("ganja") ||
    message.content.toLowerCase().includes("boof") ||
    message.content.toLowerCase().includes("pot") ||
    message.content.toLowerCase().includes("mary jane") ||
    message.content.toLowerCase().includes("marijuana")
  ) {
    message.react("🥦");
  }

  if (message.content.includes("smoke") || message.content.includes("smoking"))
    message.channel.send(
      message.author.toString() +
        " Did I hear smoke? I've got smoke if you guys need it, it's real good smoke."
    );
});
