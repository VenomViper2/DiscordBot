const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-henge")
    .setDescription("See the rules for Henges!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Henges")
      .setDescription(`Henges are safe havens in a world that isn't kind. An active henge produces a large barrier around itself large enough for a small village of between 50 and 100 people to build their homes, albeit often sharing many of those buildings communally.\n
      The protective barrier in a henge exists as a sphere with the Central Henge Stone as its centre. It appears as a shimmering light, and gives off a slight breeze. No living being other than humans can pass through it. In fact, Beasts tend to give Henges a wide berth. Passing through the shimmer in either direction causes a cold shiver to run down your spine.\n
      While the barrier of a Henge does not kill plant life, it is nevertheless rare to have much more than grass and mushrooms growing within the barrier of a Henge, as the soil tends to be so infertile.
      
      `)
      .setColor(0x18e1ee)
      .setThumbnail(`https://upload.wikimedia.org/wikipedia/commons/b/b1/Ballinagree.jpg`)
      .addFields([
        {
          name: `Description`,
          value: `The average henge is a 2 metre tall, 50cm diameter stone who's base sinks deep into the ground. In a 1.5 metre radius around it can be found 5 smaller stones, around 1 metre tall and 20cm in diameter.\n\nThe exact details of each henge vary in terms of the shapes of the stones. Some are pointed, some are cuboid or prism shaped, and yet others still are perfectly cylindrical - but the basic dimensions remain consistent.\n
          The Central stone is a polished white stone with streaks of impurities marbled through it. The 5 surrounding stones tend to be a smooth dark material. In an active Henge, they all glow an azure blue, almost imperceptible in the sunlight, but undeniable.\n\nEngraved into each stone is a series of complex glyphs that glow a slightly harsher light, bright enough to read, but dim enough as to barely illuminate through a thin sheet of paper.
          `,
          inline: false,
        },
        {
            name: `Aspects`,
            value: `Each Henge has a unique "aspect" which the populus within it must follow to maintain the Henge. These aspects are sometimes a set of rules, but more often, they're a concept. For example, an aspect may be "Sleep", in which case the aspect would be more fulfilled the more that people sleep.\n
            As an aspect is fulfilled, the Henge's barrier expands slightly, increasing the safe area. If an aspect goes unfulfilled, the barrier gradually reduces in size, until it eventually goes inactive. Henge stones that have gone inactive can never be activated again. The populace of the Henge have a final warning when the stone's light becomes blindingly bright and then is extinguished. The barrier falls around a day after that.
            `,
            inline: false,
        },
        {
            name: `Eclipse`,
            value: `The eclipse is a time of great stress for all those in the village, as on that day, at the peak of the sun, at the moment of the eclipse, the very aspect of the Henge itself changes, the very runes on its face going smooth and then etching anew. This creates a fervour of activity from the local priests struggling to uncover the new aspect. In the meantime, townspeople panic, returning home, or stockpiling resources.\n
            Each aspect lasts for exactly one year before the next eclipse, and so the populus are aware of its approach in advance. It is generally understood that, after an eclipse, until sunrise of the following day, the Henge is in a grace period, during which it will not reduce in size. After that, if the aspect still hasn't been determined, then panic really starts to set in.
            `,
            inline: false,
        },
        {
            name: `Waystones`,
            value: `Much smaller than a full Henge, Waystones are flat stones set flush into the ground. While many Waystones are different shapes, they tend to have an area of around 2 square metres, and have a very simple set of Henge Glyphs on them.\n
            Unlike a Henge, they are either "active" or "inactive", and switching between the two happens often. Following the Aspect of a waystone is usually easier to determine and follow. Aspects like "Fire" and "Meat" would only require any fire, or part of a single dead beast to be active. Once active, they produce a barrier to their edges, but no further.\n
            These waystones can be life savers for travellers and hunters alike. Anyone who would go beyond the safety of a Henge would do well to use them. Often, Hunters have a good idea of the Waystones in their area and the Aspects of those stones.
            `,
            inline: false,
        },    
    ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
