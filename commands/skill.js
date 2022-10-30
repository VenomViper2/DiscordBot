const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('old')
		.setDescription('Lists out the skills!'),
	async execute(interaction) {
		await interaction.reply(
            '__**Power**__\nAttack\nForce\nEndurence\nIntimidation\nAthletics\n' +
            '__**Finesse**__\nDefence\nInitiative\nPreperation\nStealth\nSwindling\n'+
            '__**Mind**__\nSearch\nStudy\nSurvial\nToxicology\nBeastiology\n'+
            '__**Heart**__\nAwarebess\nScrutiny\nCharm\nDeception\nComposure\n'
        );
	},
};