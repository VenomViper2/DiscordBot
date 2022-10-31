const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-the-timbers")
    .setDescription("Information relating to The Timbers!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("The Timbers (Near North West)")
      .setColor(0x18e1ee)
      .addFields([
        {
            name: `The Timbers`,
            value: `Thick tree trunks raise up into the sky, connection with canopies of branches obscuring the sky. A thick of fallen leaves and dense brush scatter the ground, and all kinds of shrubbery scarf up every scrap of light that reaches the forest floor.\n\nThe Timbers reflect the changing of the seasons more so than anywhere else, the climate and landscape almost unrecognisable between them. The beasts of the Timbers hide behind trunks and amongst branches and brush.\n
            Cabins in the timbers are mostly built of huge wooden logs. Some have chimneys built of stone, though due to the scarcity of the necessary materials, and difficulty of building, this is usually reserved for the larger buildings.\n\nMuch of the Timber’s clothing is made with ferns, with hides and furs being rarer than in much of the rest of the world.`,
            inline: false,
        },
        {
            name: `\u200b`,
            value: `It is from the Timbers that Woodwind instruments get their name. Instruments are so common, that only the exceptional ones are coveted at all.\n\nDespite being capable of making paper, those of the Timbers tend not to use it when it can be avoided, preferring to tell stories round the fire.
            `,
            inline: false,
        },
    ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
