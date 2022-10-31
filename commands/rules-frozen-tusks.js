const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-frozen-tusks")
    .setDescription("Information relating to The Frozen Tusks!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Frozen Tusks (South West)")
      .setColor(0x18e1ee)
      .addFields([
        {
            name: `Frozen Tusks`,
            value: `Desperately harsh winds fall from the walls of ice and snow that make up the Frozen Tusks. Just a little disturbed snow can cause a knock on effect leading to a catastrophic avalanche. Almost equally dangerous, an uncovered cave can release a host of unfamiliar beasts which have been lying dormant for decades. The scarcity of food makes beasts in the Tusks especially aggressive and prone to attack.\n
            Tusk villages do not have separate individual homes, but rather share the communal space of the cave cut from the mountain. The locals primarily subsist on mosses and mushrooms grown deeper into the mountain. This supplemented with rare meals of meat when a beast is felled, and dry foods gained in trade with the west. Ice cold lakes nestled amongst the peaks are managed for fresh water, and a risky source of freshwater fish. Even then, this sustains only a very small population.
            `,
            inline: false,
        },
        {
            name: `\u200b`,
            value: `The people of the Tusks like to be communal. They will often be singing, story telling, doing communal carvings, or drawings on the walls. The drawings will rarely be kept for long, nor the stories continued, before they are erased, or forgotten, and begun anew. `,
            inline: false,
        },
        {
            name: `\u200b`,
            value: `Henges in the Tusks began to use beasts extensively, cultivating them like plants, harvesting their furs and even riding them for travel. Though the Clergy desperately advised against it, the people would not listen. The beasts, having gained the humans' trust, waited until one nasty winter, when they knew the humans would be weak and unfed.\n\n They turned on the people who had shown them kindness and showed no mercy in return. Though many were able to retreat to their Henges, their winter stores had been exhausted, and they had come to rely on their beasts. By the time the next Clergy envoy arrived, all that remained were perished Hengestones, and the regretful warnings left by people betrayed. It is thought that only one Hengestone remains in the Frozen Tusks.
            `,
            inline: false,
        },
    ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
