
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config();

// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection, Message } = require('discord.js');
const { cp } = require('node:fs');
const { Console } = require('node:console');

// Create a new client instance
const client = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages, 
	GatewayIntentBits.GuildMessageReactions,
	GatewayIntentBits.MessageContent
] 
});

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, interaction => {
	console.log(interaction);
});
client.on(Events.InteractionCreate, async interaction => {
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
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
	console.log(interaction);
});


// Message replys
client.on("messageCreate", async message =>{
	if(message.author.bot){return}

	if(message.content === "(╯°□°）╯︵ ┻━┻"){
		await message.reply({content: '┬─┬ノ( º _ ºノ)'});
	}
	if(message.content.toLowerCase().includes("69")){  
		await message.reply({content: "69, nice"});
	}
	if(message.content.toLowerCase().includes("gloomhaven")){  
		await message.reply({content: "GLOOMHAVEN"});
	}
	if(message.content.toLowerCase().includes("reedtooth") || message.content.toLowerCase().includes("readtooth" || message.content.toLowerCase().includes("reed-tooth"))){  
		await message.reply({content: "ALL HAIL REEDTOOTH"});
	}
	if(message.content.toLowerCase().includes("dankweed")){  
		await message.reply({content: ":no_smoking:"});
	}
	if(message.content.split(" ").includes("crab") || message.content.split(" ").includes("crabs")){  
		await message.reply({content: "Sorry, what's a crab? Do you mean crawdads?"});
	}
}
)
console.log(process.env.guildid);
// Log in to Discord with your client's token
client.login(process.env.token);

//test