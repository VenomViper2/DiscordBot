const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-skies")
    .setDescription("Information relating to the Sky!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("World and Skies")
      .setColor(0x18e1ee)
      .setThumbnail(`https://c4.wallpaperflare.com/wallpaper/648/693/273/fantasy-art-water-anime-sky-night-sky-hd-wallpaper-preview.jpg`)
      .addFields([
        {
            name: `Daytime Sky`,
            value: `The daytime sky is dominated by the great celestial body, Sol, or the Sun. When lit by Sol, the sky is a deep blue. Wisps of white sit below it, often called clouds, casting shadows on the world below. When they grow large enough, and dark enough, they will pour rain onto the world below.
            `,
            inline: false,
        },
        {
          name: `Nighttime Sky`,
          value: `The dim night sky shows few features other than that of the light moon, its glow casting over the otherwise empty sky. The white wisps known as clouds appear as shadows against the moonglow. While within a Henge, the glow of its light obscures even those few features, other than the moon itself.
          `,
          inline: false,
      },
    ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
