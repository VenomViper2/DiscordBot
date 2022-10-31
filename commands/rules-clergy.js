const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-clergy")
    .setDescription("Information relating to The Clergy!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("The Clergy of the Henge Order")
      .setColor(0x18e1ee)
      .setThumbnail(`https://s1.zerochan.net/Church.600.792560.jpg`)
      .addFields([
        {
            name: `Responsibilities`,
            value: `The priests play a vital role in the continual running of the world. To begin with, every Henge has an allocated Priest who keeps the peace and interprets the Henge stone.\n
            They are considered sacrosanct to the Henge's Aspect and are not required to follow the conditions, though many will if it does not endanger themselves too much.\n
            Meanwhile, a team of Priests in the Dome keep track of the celestial calendar, always mindful of upcoming eclipses, sending support to towns expecting one to aid in a faster translation and smoother transition.\n
            All along, sending resources, doctors and craftsmen across the world to aid communities struggling with their Aspect, or struggling to recover from their last one.`,
            inline: false,
        },
        {
            name: `Advantages`,
            value: `Despite all of the responsibilities, the life of a Priest is not without reward. They are rarely expected to engage in physical labour, and they tend to have a measure of freedoms above the normal man. Even just the opportunity to ignore the Aspect of your henge is a freedom which many would give their lives for.\n
             Add to that the weeks of downtime they will often get between assignments, and the indisputable power awarded to them, and the risks can seem very worth it.`,
            inline: false,
        },
        {
            name: `Recruitment`,
            value: `Children that are seen to have great promise by an existing priest, are taken to the Grand Dome for training alongside their peers. There, they are trained in all things, from reading and writing, to climbing and fighting.\n
             They are taught about the eclipses and the aspects in more detail than they'd have ever had before, and are taught to think outside of the box and question the world around them, a skill that grows all too rare in adults forced to accept strict yearly rules.\n
            At the end of their training, the children are given a final examination, often the completion of an actual assignment. Those that pass are given a Baryon and are granted the title of priest. Those who do not are given the option to return home to their families, or stay as Monks.`,
            inline: false,
        },
        {
            name: `Acolytes`,
            value: `Those currently training to become a priest have the lowest rank, known as Acolyte. They have few responsibilities, but they still hold many of the advantages. Being the youngest people present in the Dome, many of the higher ranks treat them as their own shared children.`,
            inline: false,
        },
        {
            name: `Monk`,
            value: `A failed Acolyte, who chooses to stay in the Clergy, becomes a Monk. The Monks have many responsibilities in the daily running of the Dome, often carrying messages, cooking, cleaning, and other odd jobs.\n
             They are sometimes affectionately known as the caretakers. While they are not as prestigious as the Priests, they nevertheless play a vital role in the daily running of the world, for without them, there would simply not be enough people to keep things running smoothly.`,
            inline: false,
        },
        {
            name: `Priest`,
            value: `A successful Acolyte becomes a Priest. This is the lowest rank considered part of the central order. Many of the Priest's are sent to a Henge to guide the people who live there. These are often called Holding Priests. Many others stay in the dome, where they are given assignments and sent out into the world. These are called Wandering Priests.\n
            Due to the limited number of Henges, Priests who wish to become a Holding Priest are usually added to a waiting list and act as Wandering Priests in the meantime.`,
            inline: false,
        },
        {
            name: `Cleric`,
            value: `At any time, the Clergy has three Clerics. These three focus their full time on communing with the Grand Dome itself, attempting to gradually tease out its secrets. Due to the specific nature of the roll, most Clerics had chosen to work towards this position since the beginning of their training.\n
             Should a priest prove themselves enough, an existing Cleric may step down and allow that priest to step into their position. Those ex-clerics often go on to make fantastic priests, and often advance to Bishops.`,
            inline: false,
        },
        {
            name: `Bishop`,
            value: `The Bishop is the next rank for most Priests. A bishop has the right to give others assignments, and may turn down assignments that they believe would not be a good use of their time, passing them on to a Priest instead.\n
             To reach this position, one must receive a personal recommendation from at least five Bishops, or three of the Archbishops. In addition, if all Priests come to a unanimous decision that a certain individual should be made into a Bishop, then he is. At present there are 6 Bishops.`,
            inline: false,
        },
        {
            name: `Archbishop`,
            value: `The Archbishops enjoy even greater rights than the Bishops. They are not given assignments, but rather must design them and assign others to them, only going out when they believe they are personally required.\n
             An Archbishop must be present whenever a Baryon is awarded to a graduate Acolyte, and may veto any decision to award a Baryon at a whim. A Bishop can be raised to the rank of Archbishop if all Clergy of that rank or higher agree unanimously. They can also be raised to that rank if all Bishops unanimously agree, but this has not happened in many years.`,
            inline: false,
        },
    ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
