const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-the-crags")
    .setDescription("Information relating to The Crags!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("The Crags (North)")
      .setColor(0x18e1ee)
      .addFields([
        {
            name: `The Crags`,
            value: `Steep crevices cut from the sandy earth criss cross the seemingly lifeless barrens of the Crags. The sun bakes the rock over the day, and cold winds falling from the Ore piles strip the heat from the surface at night.\n\nThe chasms below link together in vast networks through canyons and caves. Protected from the worst of the elements, the linking streams and caves are host to all manner of dangerous beasts.\n
            The people of The Crags use instruments of clay, whose harmonic tones reverberate within houses cut into stone.`,
            inline: false,
        },
        {
            name: `\u200b`,
            value: `Many Crag villages make decisions communally, sometimes using gemstones as symbols of authority. Local cacti are harvested for their fibres, which are pulled and spun to create rough fabric.\n\n Luckily, the warmth trapped by the tunnels allows for scant clothing, covering only the feet and waist.\n\nSmall tablets of clay are used for writing and recording, being baked hard and stacked in storage rooms for keeping. Much smaller tiles have intricate symbols drawn upon them for use in games.`,
            inline: false,
        },
    ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
