const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-ore-piles")
    .setDescription("Information relating to Ore Piles!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Ore Piles (North East)")
      .setColor(0x18e1ee)
      .addFields([
        {
            name: `Ore Piles`,
            value: `Vast masses of rocky land rise up into the clouds, littered with caves and mines rich in ores. At the foot of the mountains, runoff water and dirt mix into a shallow bog. \n\nTravel in the region is tough and slow, requiring climbing and pathing, and constant doubling back. Creatures in the Mountains and Bogs take advantage of this to hunt their prey.
            `,
            inline: false,
        },
        {
            name: `\u200b`,
            value: `The clans of the mountains live in towns half cut into the rock, and half built out into the sky, supported by large struts of solid stone. Much of their diet is made up of hardy root vegetables, supplemented with meats hunted from the surrounding areas.\n\n The beast’s corpses are not wasted, their hides being used for clothing, leather for drums, and bones for jewellery and dice.\n
            Those in the bogs build rock brick houses atop piles of carefully stacked flat stones, plugging the gaps with reeds and mud.\n\n Small tufts of fluff picked from those reeds are also spun into fibres and weaved into soft clothing. Their diets are mostly made of odd fruits, and squashes, with fish as a rare treat. The travel enabled by rafts also allows them to trade culture and foods with the Crags and the Shimmersands, though the Ore Piles are more difficult to reach.
            `,
            inline: false,
        },
    ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
