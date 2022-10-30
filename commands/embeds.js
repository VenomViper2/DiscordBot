const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("skill-list")
    .setDescription("Replies Embed!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Skill List")
      .setDescription("A List of the skills")
      .setColor(0x18e1ee)
      .setImage(`https://cdn.pixabay.com/photo/2017/08/31/04/01/d20-2699387_1280.png`)
      .setTimestamp(Date.now())
      .addFields([
        {
          name: `Power`,
          value: `Attack\nForce\nEndurence\nIntimidation\nAthletics`,
          inline: true,
        },
        {
            name: `Finesse`,
            value: `Defence\nInitiative\nPreperation\nStealth\nSwindling`,
            inline: true,
        },
        {
            name: `\u200b`,
            value: `\u200b`,
          },
        {
            name: `Mind`,
            value: `Search\nStudy\nSurvial\nToxicology\nBeastiology`,
            inline: true,
        },

        {
          name: `Heart`,
          value: `Awarebess\nScrutiny\nCharm\nDeception\nComposure`,
          inline: true,
        },
      ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
