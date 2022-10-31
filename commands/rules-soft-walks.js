const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-soft-walks")
    .setDescription("Information relating to The Soft Walks!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Soft Walks (South)")
      .setColor(0x18e1ee)
      .addFields([
        {
            name: `Soft Walks`,
            value: `Rolling dunes of snow roll out in all directions. In the day, the crisp white snow becomes blinding in the light of the sun. In the night, even the little light from the sky is enough to illuminate the whole landscape.\n\n The region’s many snowstorms bury any attempt to create roads, and hide the lairs of dangerous beasts. In places, the snow can be several feet deep, and when freshly laid, may not support a person’s weight, making a cold grave for the careless.\n
            Those of the South build their homes out of domes of ice and snow. The homes stand sturdy against the weather, as well as offering a surprising amount of warmth. A southern diet is one almost entirely composed of meats prepared in a variety of ways.\n\nBones are taken and presented to master craftsmen, who designate worthy bones for jewellery, game pieces, or to be crafted into prized woodwind instruments. Those instruments are awarded as accolades, and having one is seen as a mark of honour and respect.`,
            inline: false,
        },
        {
            name: `\u200b`,
            value: `Travel is slow and perilous, making travel at more than a walking pace almost impossible, and even that requires wide adapted boots to prevent sinking into the snow. However, luggage can be easily pulled along with just a snow raft and a rope.\n\nDue to the rarity of trade arrivals, both parchment and charcoal are highly coveted, and written knowledge is sealed away safely.`,
            inline: false,
        },
    ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
