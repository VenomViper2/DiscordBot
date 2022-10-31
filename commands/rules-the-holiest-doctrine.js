const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-the-holiest-doctrine")
    .setDescription("Information relating to The Holiest Doctrine!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("The Holiest Doctrine")
      .setColor(0x18e1ee)
      .setThumbnail(`https://static.wikia.nocookie.net/nier/images/1/16/SINoALICE_Grimoire_Weiss_Artwork2.png/revision/latest?cb=20200927172841`)
      .addFields([
        {
          name: `Devotion`,
          value: `It was once the case that all Clergy members held The Holiest Doctrine as immutable truths. Great effort was taken to ensure that the teachings were thoroughly spread amongst the Henges.\n\nHowever, as years passed, and the need for practicality grew, fewer and fewer efforts could be spared on this task.\n
          With reduced instruction in the way of the Holy Order, new acolytes gave less mind to the teachings, and once they became the new generation of Priests, they preached even less of the Great Faith in their travels.\n\nNow, whilst many Clergy still hold some belief in the tenets of the faith, few take it literally.
          `,
          inline: false,
        },
        {
            name: `Teachings\n`,
            value: `\n\n ***"There is no higher holiness than the worship of the Henge."***\n\nIt should be little surprise to anyone that the great Henge Stones which protect mankind, would be considered the most divine of temples. As such, obeying their instructions is considered to be hallowed worship, and purposefully allowing them to fall is a deep heresy.\n
            ***"The eggs of power contain blessed light."***\n\nBaryon stones are gifts from the stones. Not only do they offer great powers, but they also grant the ability to commune, and allow the proper worship of the stones. They are treated with great reverence, as are the powers within.\n
            ***"All things are knowable, and knowledge makes all things."***\n\nThe Baryon stones grant momentary insight, and it is through this insight that such miraculous effects are accomplished. This shows that all of creation is shaped by, and subject to, knowledge of it.`,
            inline: false,
        },
    
        {
            name: `\u200b`,
            value: `***"The beast is anathema."***\n\nBeasts are not only a grave danger, but are also repelled by the holy light of the Henge. This is as true a proof as any that they are unholy aberrations.\n
            ***"Lead is the profane material."***\n\nThe material, lead, is the only thing that refuses the hallowed powers of a Baryon. To refuse such a sacred rite is proof of its unholy machinations.\n
            ***"The aspects serve a greater purpose. We must trust in it."***\n\nWhere did the henges come from? Why do they require an aspect? And why does that aspect change every year? Why is there a grand central henge, different in design, with no aspect at all? These questions must have a virtuous answer.`,
            inline: false,
        },
        {
            name: `World Origin`,
            value: `Once, all was as stone. The antecedents, unchanging statues, watched out at a silent world. They saw the arrival of the flattened fields. Of the rising mountains. Of the unmoving rivers and frozen seas. Such was so for eternity.\n
            Once, all began to move. The seas began to churn. The wind began to blow. The antecedents observed this, and found that motion was a quality they too possess. Through that motion, they could channel creation. With it came the birth of language, writing, music and sociality, even the birth of children. Such was so for eternity.\n
            Once, all withered and died. Severed stems withered and browned. Worn clothes became tattered and torn. Even the antecedents, once as stone, who had watched over creation, founders of civilization, could ignore time no longer. With age, came weakness. With weakness, frailty. And finally, the first of the antecedents succumbed to death. Such has been so, forever since.`,
            inline: false,
        },
    ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
