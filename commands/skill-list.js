const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("skill-list")
    .setDescription("Replies Embed!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Skill Levels")
      .setDescription(' Each skill is governed by one of the four attributes. When making a test using a skill,',
       'the governing attribute is used as the base, adding the skill afterwards. The following table shows each',
        'skill’s governing attribute. A deeper explanation of each skill follows, though the explanation is not',
         'exhaustive.')
      .setColor(0x18e1ee)
      .setThumbnail(`https://cdn.pixabay.com/photo/2017/08/31/04/01/d20-2699387_1280.png`)
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
