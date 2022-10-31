const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-common-people")
    .setDescription("Information relating to Common People!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Common People")
      .setColor(0x18e1ee)
      .setThumbnail(`https://www.wallpaperflare.com/static/54/502/481/fantasy-art-farm-painting-fantasy-wallpaper.jpg`)
      .addFields([
        {
          name: `Life in a Henge`,
          value: `For the most part, life in a Henge isn't too bad. Everyone has a job to do, and getting it done offers a sense of real achievement. There's a strong sense of community in most Henges, Aspect permitting.\n
          That said, the Aspects can weigh heavy on the people though. For a Henge to survive, all of its people must commit to it. Only the Hunters, who go beyond the barrier for food, have much chance to be free of the Aspect at all. Over the course of a lifetime, changing aspect every year takes its toll on a population.\n
           People tend to offer little resistance to their aspects, simply doing what they can to survive.
          `,
          inline: false,
        },
        {
            name: `Life Beyond a Henge`,
            value: `For most people, living outside of a Henge is a horrifying idea. Certainly the Clergy do not recommend it. That said, it does sometimes happen.\n 
            Groups that try to settle beyond a Henge do not last long. Beasts gather towards stationary groups, and constant movement allows little opportunity for safety.
            `,
            inline: false,
        },
        {
            name: `Professions`,
            value: `There are only a few professions that the common man can work towards with any success. Hunters go beyond the Barrier of a Henge to take down smaller Beasts, keeping the area safe and taking in food.\n
             Gatherers go just beyond the limits of the Henge to farm crops and scavenge for food. Some people train hard to gain unique skills such as those of a smith or a builder. These skills are encouraged by the Clergy who struggle to keep up with demands.
            `,
            inline: false,
        },
    ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
