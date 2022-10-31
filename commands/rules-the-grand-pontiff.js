const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-the-grand-pontiff")
    .setDescription("Information relating to The Grand Pontiff!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("The Grand Pontiff")
      .setColor(0x18e1ee)
      .setThumbnail(`https://preview.redd.it/9y60s3tzkc061.jpg?auto=webp&s=103ad26bb869250b9f08200e203976441cae1edd`)
      .addFields([
        {
            name: `The Grand Pontiff`,
            value: `The Grand Pontiff is ultimately responsible for the running of the entire Clergy. While this often means delegating his work to others, it also includes managing morale, training, answering queries, resolving disputes and having a constant and intimate awareness of all changes throughout the world.\n\nThere can only be one Pontiff. When the Pontiff dies, a new one is voted for out of all Priests, Bishops and Archbishops. It requires a unanimous decision from the Arch Bishops (apart from the one being voted for, if one of them is in the running). If at least half of the Bishops vote against that Pontiff, then a new vote is held. If all Priests unanimously vote against them, then a new vote is held.`,
            inline: false,
        },
    ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
