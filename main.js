const fs = require("node:fs");
const path = require("node:path");
require("dotenv").config();

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

// Message replys
client.on("messageCreate", async (message) => {
    await responseBuilder("(╯°□°）╯︵ ┻━┻", "┬─┬ノ( º _ ºノ)", message);
    await responseBuilder("69", "69, nice.", message);
    await responseBuilder("gloomhaven", "GLOOMHAVEN", message);
    await responseBuilder("reedtooth", "ALL HAIL REEDTOOTH", message);
    await responseBuilder("dankweed", ":no_smoking:", message);
    await responseBuilder("Stimulate", "OUCH", message);
    await responseBuilder("mitch", "Sorry, do you mean Wendwillow?", message);
    await responseBuilder("tom", "Sorry, do you mean Jerik?", message);
    await responseBuilder("crab", "Sorry what is a crab? Do you mean Crawdad?", message);
    await responseBuilder("dan", "Sorry, do you mean Nathair?", message);
    await responseBuilder("ben", "Sorry, do you mean Demikas?", message);
    await responseBuilder("hatfield", "Sorry, do you mean Layla ?", message);
    await responseBuilder("matt", "Sorry, do you mean Ned?", message);
    await responseBuilder("phil", "Sorry, do you mean... well I guess Phil is ok.", message);
});

async function responseBuilder(input, output, message) {

    if (message.author.bot) {
        return;
    }
    if (message.content.toString().toLowerCase() === input) {
        await message.reply({content: output});
    }

}

// Log in to Discord with your client's token
client.login(process.env.token);

//test
