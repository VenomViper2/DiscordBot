const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-the-grand-dome")
    .setDescription("Information relating to The Grand Dome!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("The Grand Dome (World Centre)")
      .setColor(0x18e1ee)
      .addFields([
        {
            name: `The Grand Dome`,
            value: `The general view of the Clergy varies a little from Henge to Henge, often depending on their view of their own Priest. As a general rule though, they are looked upon with a combination of reverence and fear.\n\nAfter all, the Priests hold a great deal of power, and most henges would die without their support. Monks however tend to be looked upon with less caution. They are often seen as friends and allies who do all they can to provide for the places they go, and ask very little in return.
            `,
            inline: false,
        },
        {
          name: `The Grand Dome (clergy)"`,
          value: `The Clergy of the Henge Order (Or henge priests) works from a Henge near the centre of the discovered world often referred to as the Grand Dome. It differs from Henge stones in two major ways.\n
          Firstly, rather than being a central pillar with a small barrier around it, it is a huge Dome set into the ground, with just one entranceway, and a huge pillar in its core. In addition, the Henge does not have an Eclipse, nor, to anyone's knowledge, an aspect.\n
          The Henge Glyphs set into the grand dome seem to speak of the overall rules of the Henges, although not all of them have been translated yet. That no beasts may enter the range of a henge. That an eclipse shall come once a year to change the aspect of each henge.\n
           This is just a fragment of the writings, but a portion of the Clergy work tirelessly to uncover even a little more meaning every year. It's much more complicated translating such specific text rather than the basic ideas needed to decipher a Henge Stone.`,
          inline: false,
        },
    ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};
