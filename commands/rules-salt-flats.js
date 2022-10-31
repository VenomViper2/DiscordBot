const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-salt-flats")
    .setDescription("Information relating to The Salt Flats!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Salt Flats (Far North West)")
      .setColor(0x18e1ee)
      .addFields([
        {
            name: `Salt Flats`,
            value: `The further North West one travels, the more barren the land becomes. The dirt becomes dry and gritty. Before long, patches of white salt are almost as common as the dirt itself, and the surface of the ground cracks into strange geometric shapes.\n\nDangerous beasts prowl the salts, hungry for even the slightest sign of life.
            `,
            inline: false,
        },
    ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
