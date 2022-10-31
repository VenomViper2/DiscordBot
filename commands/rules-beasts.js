const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-beasts")
    .setDescription("Information relating to Beasts!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Beasts")
      .setColor(0x18e1ee)
      .setThumbnail(`https://i.pinimg.com/736x/0d/02/7f/0d027fff494415d394ad7e10d3d976e0--fantasy-beasts-fantasy-art.jpg`)
      .addFields([
        {
          name: `The Term "Beast"`,
          value: `For as long as people can remember, the world has been split into categories. Creatures which die when they touch the light of a Henge Barrier, and Humans. Since pets are impossible, and domestication is an extreme task with rare success, humans have precious little contact with other creatures at all, other than hunting, or being hunted.
          As a result, most humans are rightfully cautious of all creatures. Even a prick from the claws of the smallest, most innocuous, flying creature can cause illness and eventual death. So, humans refer to all other creatures as "Beasts".
          Some Priests and Monks have tried to sort creatures into a few different categories to aid in their Bestiaries. While this practice is not widespread, it is at least understood by the Clergy. Just a few of the Major Categories, for example "Birds" and "Bugs" are recognised by the masses.
          `,
          inline: false,
        },
        {
            name: `Lesser Beasts`,
            value: `Beasts that can fit within an enclosed hand are sometimes referred to as "Lesser Beasts" by common people. This ranges from small birds, to most Bugs, and even some other Beasts. While they are not often so dangerous as the other categories, they sometimes have some scary abilities, extremely unusual movements, and are often hard to spot, making them the greatest fear of some travellers.
            `,
            inline: false,
        },
        {
            name: `Faunal Beasts`,
            value: `While less common than Lesser Beasts, Faunal Beasts are any larger animal. They can often be seen with the naked eye at a reasonable distance, and their life cycle is better understood. The rare attempts to domesticate beasts are made with this category and, where successful, are usually ruined by others of the same category consuming the produce. These are the creatures most often hunted for their meat due to their relative lack of danger.
            `,
            inline: false,
        },
        {
            name: `Dire Beasts
            `,
            value: `These are Beasts that pose an immediate threat to anyone that encounters them, Hunters and Priests alike. They possess some natural weapon, sharp claws or teeth, catastrophic charging speed, white hot skin, or a glare that can turn a man to stone. These beasts tend to stay further away from Henges than the other creatures, but can come close when food beckons.
            It is seen as a bad omen when Dire Beasts come close to a Henge, many commoners believing that they can tell when an aspect is not being met. Though the Clergy deny it, there is some research that seems to support it.
            `,
            inline: false,
        },
        {
            name: `Mythical Beasts
            `,
            value: `Just as the name implies, these are the Beasts that children are told of in fairy tales. Stories about them vary vastly from Henge to Henge. Sometimes they are said to be intelligent and capable of human speech. Sometimes they are allies to humanity, other times they are enemies. Often the Henges are said to be related to these Beasts, whether the stones are the scales gifted by a Great beast who felt sorry for mankind, or the teeth of a slain creature.
            The Clergy once took these stories extremely seriously, putting a great deal of time and resources into reports of a sighting. They have since announced that these fairy tales are just that, but are open to investigating new reports, in case it leads to some particularly nasty Dire Beasts.
            `,
            inline: false,
        },
        {
            name: `Domestic Beasts
            `,
            value: `While very rare, some beasts have been domesticated. These Beasts are usually kept in a penned area just outside of the town, and are often bred and killed to add to the meat reserves of the Henge. As a result, a Henge with domesticated animals tends to be much more comfortable than one without. Priests warn of those who become complacent being unable to feed their families when bad tidings come.
            Often, these creatures are killed by Hungry Beasts beyond the walls, or by those in the populous who are afraid of the creatures being in such close union with Humans. To use the animals for work, perhaps in seeding some of the fields, has occurred to some, but the thought of riding one is unheard of.
            `,
            inline: false,
        },
    ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
