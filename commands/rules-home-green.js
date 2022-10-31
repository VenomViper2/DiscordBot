const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-home-green")
    .setDescription("Information relating to Home Green!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Home Green (The Pastures)")
      .setColor(0x18e1ee)
      .addFields([
        {
            name: `Home Green`,
            value: `The rolling hills of Home Green benefit from the same climes as The Pastures of The Grand Dome.\n\nBeing a common throughway for the Clergy, the population of the most Dangerous beasts are regularly culled. However, this makes it a haven for the beasts of other zones fleeing from their less hospitable environments.\n
            The townships of Home Green also offer much of their culture to the constant presence of the Clergy. Being so close to the centre of the world, the culture of those in the grassy plains is one of few extremes or notable peculiarities compared with the central clergy themselves.\n\n Though the changing aspects of the Henges of course have a great impact on their day to day behaviour as well.
            `,
            inline: false,
        },
    ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
