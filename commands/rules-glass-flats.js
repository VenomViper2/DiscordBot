const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-grass-flats")
    .setDescription("Information relating to The Grass Flats!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Glass Flats (South East)")
      .setColor(0x18e1ee)
      .addFields([
        {
            name: `Glass Flats`,
            value: `Structures of rising crystal spikes scatter the otherwise featureless surface of the endless ice. The sharp sprinkled snow gathers at the spikes, forming slight shelter. Slow constant winds pull warmth from travellers, freezing anything exposed.\n
            There are few Beasts in the Glass flats, but almost all are mortally dangerous. There are no surviving Henges in the Glass flats, and as such, no culture or people to speak of. Due to the inaccessibility of the area, Clergy visits were rare, and so precise records do not exist. However, it is believed that a series of worsening winters made the ice too thick to cut through for fishing, starving the residents. With no people to follow their aspects, the Henges would have perished quickly.
            `,
            inline: false,
        },
    ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
