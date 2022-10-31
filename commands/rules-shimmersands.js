const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-shimmersands")
    .setDescription("Information relating to The Shimmersands!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Shimmersands (East)")
      .setColor(0x18e1ee)
      .addFields([
        {
            name: `Shimmersands`,
            value: `Though there is precious little water in the east, the horizon taunts it always. Navigating the sands is a near impossible task with no landmarks for miles around.\n\nThe sands shift into flats and hills with gusts of the wind, blinding the eyes and mind alike. In the day, the sun releases a crippling heat, but with it gone in the night, the cloudless sky touches the land with the cold of the void.\n\n Though there are a few Oases’ dotted through the sands, they are dangerous places, swarming with beasts for much of the night and day.`,
            inline: false,
        },
        {
            name: `\u200b`,
            value: `The locales of the Shimmersands construct walls of sandstone around each Henge. Rather than a defence against beasts or visitors, the wall acts as first defence against the gritty winds that wear away at all but the hardiest of structures.\n\nWithin, large tents constructed mostly of animal hides, resistant to the sands and easy to repair.\n
            Clothing is tough to come by, either being woven from the fibres of oasis plants, or the leathers cut from a beast. Nevertheless, full coverage is vital to protect from the sand, so apparel is worn to the point of destruction, repaired, and worn again.\n
            So desperate are some of the Henges in the Shimmersands, that the people have been known to attempt to harness beasts for transport, and even to harvest for fur or milk. The Clergy warn against this reckless practice, which has been known to cause the downfall of henges in the past.
            `,
            inline: false,
        },
    ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
