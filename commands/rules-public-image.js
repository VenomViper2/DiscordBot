const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-public-image")
    .setDescription("Information relating to public image of The Clergy!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Public image")
      .setColor(0x18e1ee)
      .setThumbnail(`https://seqara.id/wp-content/uploads/2020/07/Belajar-Skill-Public-Relations-dari-Karakter-Anime-770x370.jpg`)
      .addFields([
        {
            name: `Public Image`,
            value: `The general view of the Clergy varies a little from Henge to Henge, often depending on their view of their own Priest. As a general rule though, they are looked upon with a combination of reverence and fear. After all, the Priests hold a great deal of power, and most henges would die without their support. Monks however tend to be looked upon with less caution. They are often seen as friends and allies who do all they can to provide for the places they go, and ask very little in return.
            `,
            inline: false,
        },
    ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
