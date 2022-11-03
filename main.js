const fs = require("node:fs");
const path = require("node:path");
require("dotenv").config();
const BotMessenger = require("./classes/response/BotMessenger");

// Require the necessary discord.js classes
const {
    Client,
    Events,
    GatewayIntentBits,
    Collection,
    Message,
} = require("discord.js");

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
    ],
});

client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(
            `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
        );
    }
}

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, (interaction) => {
    console.log(interaction);
});
client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({
            content: "There was an error while executing this command!",
            ephemeral: true,
        });
    }
    console.log(interaction);
});

// Message replies
client.on("messageCreate", async (message) => {
    let bot = new BotMessenger();
    let messageAndResponse = new Map();
    messageAndResponse.set("69", "69, nice.")
    messageAndResponse.set("gloomhaven", "GLOOOOOMHAVEN!!!")
    messageAndResponse.set("reedtooth", "ALL HAIL REEDTOOTH!")
    messageAndResponse.set("dankweed", ":no_smoking:")
    messageAndResponse.set("mitch", "Sorry, do you mean Wendwillow?")
    messageAndResponse.set("tom", "Sorry, do you mean Jerik?")
    messageAndResponse.set("crab", "Sorry what is a crab? Do you mean Crawdad?")
    messageAndResponse.set("dan", "Sorry, do you mean Nathair?")
    messageAndResponse.set("ben", "Sorry, do you mean Demikas?")
    messageAndResponse.set("hatfield", "Sorry, do you mean Layla?")
    messageAndResponse.set("matt", "Sorry, do you mean Ned")
    messageAndResponse.set("phil", "Sorry, do you mean... well I guess Phil is ok.")
    messageAndResponse.set("maz", "Sorry, do you mean Glass?")
    for (let [key, value] of messageAndResponse) {
        await bot.responder(key, value, message);
    }

});


// Log in to Discord with your client's token
client.login(process.env.token);

//test
