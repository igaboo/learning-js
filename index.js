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

const channel = bot.channels.cache.get("951323543545724948");
bot.login(process.env.BOT_TOKEN);

try {
  bot.on("ready", () => {
    console.log(`Bot ${bot.user.tag} is logged in!`);

    // scheduled tasks

    // 4:10 P.M.
    cron.schedule("0 10 16 * * *", function () {
      channel.send("@420 ITS 4:10. 🌿🌿🌿");
    });

    // 4:15 P.M.
    cron.schedule("0 15 16 * * *", function () {
      channel.send("@420 ITS 4:15. 🌿🌿🌿");
    });

    // 4:20 P.M.
    cron.schedule("0 20 16 * * *", function () {
      channel.send("@420 ITS 4:20 😮‍💨");
    });

    // test
    cron.schedule("0 20 17 * * *", function () {
      channel.send("@420 this is a test");
    });
  });
} catch (err) {
  channel.send("there was an error with a scheduled task: " + err);
}

try {
  bot.on("messageCreate", (message) => {
    if (message.author.bot) {
      // if message is bots, ignore it
      return;
    }

    // commands prompt
    if (message.content == "wm!commands") {
      const exampleEmbed = new MessageEmbed()
        .setColor("#1ede00")
        .setTitle("Server Commands")
        .setDescription("These are a list of the commands used on the server: ")
        .addFields({
          name: "`wm!420`",
          value:
            "Gives you the 420 role, which will alert you at 4:10, 4:15, and 4:20.",
        });
      message.channel.send({ embeds: [exampleEmbed] });
    }

    // COMMANDS
    if (message.content == "wm!420") {
      var role = message.member.guild.roles.cache.find(
        (role) => role.name === "420"
      );

      if (role)
        message.guild.members.cache.get(message.author.id).roles.add(role);

      message.channel.send(
        message.author.toString() + " Added you to the 420 list."
      );
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

    if (
      message.content.includes("smoke") ||
      message.content.includes("smoking")
    )
      message.channel.send(
        message.author.toString() +
          " Did I hear smoke? I've got smoke if you guys need it, it's real good smoke."
      );
  });
} catch (err) {
  channel.send("there was an error while reading a message: " + err);
}
