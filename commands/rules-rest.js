const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require("discord.js");
const file = new AttachmentBuilder('./assets/rest.png');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-rest")
    .setDescription("See the rules for resting!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Rest & Recovery")
      .setDescription(`When you rest, you recover to some degree. The amount
      that you recover depends on how restful the sleep was. Compare the nature
      of the sleep to the following chart to determine how much is recovered.\n
      Some factors can reduce how restful a night can be. For each of the following,
      reduce the level of rest by one: Sleeping Hungry. Extreme sensory stimulation
      (Hot, Cold, noises, light). Sleeping somewhere unsafe, without a trusted person on watch`)
      .setColor(0x18e1ee)
      .setThumbnail(`https://clipartix.com/wp-content/uploads/2017/12/Campfire-hd-camp-fire-clipart-pictures-drawing-vector-art-library.jpg`)
      .setImage('attachment://rest.png')
      .addFields([
        {
          name: `Factors`,
          value: `Some factors can reduce how restful a night can be. For each of the following, reduce the level of rest by one:
          Sleeping Hungry. Extreme sensory stimulation (Hot, Cold, noises, light). Sleeping somewhere unsafe, without a trusted person on watch.
          `,
          inline: true,
        },
        {
            name: `Interrupted sleep`,
            value: `Interrupted sleep, caused by taking watches or being attacked in the night, will always be reduced to base Level 1 rest,
             regardless of the location of that rest. In addition, if a night of rest is skipped entirely, the person in question is “Exhausted”.
              They cannot gain Boons or use their River until they have fully rested.`,
            inline: false,
        },
        {
            name: `During Travel`,
            value: `During travel, finding time to build a proper campsite can be difficult to do, and no amount of rest ever seems enough for 
            the days that follow. Therefore, these rules are usually only used when building a campsite between lengths of a journey. If a party 
            wishes to spend multiple nights resting between lengths in order to rest further, then they can of course do this, at a cost of one 
            day per rest.`,
            inline: true,
        },
      ]);

    await interaction.reply({
      embeds: [embed], files: [file]
    });
  },
};
