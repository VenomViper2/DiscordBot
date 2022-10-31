const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-mangroves")
    .setDescription("Information relating to The Mangroves!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Mangroves (West)")
      .setColor(0x18e1ee)
      .addFields([
        {
            name: `Mangroves`,
            value: `Twisted roots tie together over a vast reservoir of freshwater. Thick fog creates ominous shadows and claustrophobic views. The water underneath, an unknown depth, writhing with Beasts of unknown numbers and sizes.\n\n The evergreen canopy holds the swirling mist, and hot air, creating a hot humid climate even despite the lack of sun piercing the branches.\n
            Mangrove homes are built upon small wooden rafts, all moored together around the central henge stone. For many locals, the closest they’ve ever been to standing on dry land, is standing on a root while they pluck berries or cut wood to maintain their rafts and fishing nets.
            `,
            inline: false,
        },
        {
            name: `\u200b`,
            value: `Alongside the obvious diet of fish, fruit and berries, the people of the mangroves have also found a surprising number of ways to prepare roots for eating. With such heated and humid climate, many wear barely enough to maintain modesty.\n\n The hollow branches of the mangrove trees are cut to shape such that they make a musical tone when struck, which are used for a variety of vastly different instruments. Skilled artisans in the mangroves harvest certain leaves and roots, pulping and drying them in such a way as to create a brittle paper.`,
            inline: false,
        },
    ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
