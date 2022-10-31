const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require("discord.js");
const file = new AttachmentBuilder('./assets/focus.png');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-focus")
    .setDescription("See the rules for Focus!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Overview")
      .setDescription(`A Focus is a power that exists beyond the boundaries 
      of what is normally possible. These powers are completely unique to 
      whoever possesses them. For example, one person might be able to manipulate 
      objects at a distance, while another may transform into different shapes. One 
      might erupt fire from their body while yet another might cool things to Ice. 
      There is no rhyme or reason to what the powers can do.
      `)
      .setColor(0x18e1ee)
      .setThumbnail(`https://static.wikia.nocookie.net/oproleplaying/images/3/34/Image.png/revision/latest?cb=20151206134521`)
      .setImage('attachment://focus.png')
      .addFields([
        {
          name: `Attunement`,
          value: `Attunement is a 5th attribute-like characteristic alongside 
          Power, Finesse, Mind and Heart which is gained the moment one becomes
           a focus user. Attunement does not affect balance, character level or 
           health. It costs new level times 3 to increase. When attained, it is 
           immediately Level 4.
          `,
          inline: true,
        },
        {
            name: `Using a Focus`,
            value: `To use a focus, one must take a few seconds to summon the necessary
             energies, in combat this constitutes an action. Roll a number of ten sided
              dice equal to Level + Attunement. For each dice showing a 7 or higher, gain 
              a mote of power. A dice showing a result of a 10 gives an additional mote. 
              Those motes can then be spent immediately to trigger the effects of the Focus' 
              tome. Any that are unspent are lost.`,
            inline: false,
        },
        {
            name: `Tome`,
            value: `Each Focus has its own associated Tome. This is the list of abilities 
            which can be triggered, along with a mote cost for each one. Once a number of motes 
            have been generated with a focus roll, you may spend any number of them to trigger 
            the abilities from the tome. All Tomes have an option to spend all motes, a minimum 
            of 5, to “leave it to god”. For this option, you explain how you'd like your powers to
             manifest, and then you leave it to your GM on what actually happens.`,
            inline: false,
        },
        {
            name: `Isn't it a bit… different?`,
            value: `The Focus roll is different to every other kind of roll or test in the game,
             and considerably so at that. Iit can feel a little odd rolling it in the midst 
             of a session, amongst all of the more usual tests.
            Using the powers of a focus feels like an alien experience. 
            The secrets of reality flood through your mind, as you reach 
            out and apply just a few shreds of them to the world around 
            you before they slip away again. All passing in just an instant,
             but existing ever present in your mind. When rolling the rather 
             unusual Focus test, it's a good opportunity to consider the discomfort 
             and surrealism briefly experienced by your character.
            `,
            inline: false,
        },   
        {
            name: `Twists`,
            value: `Different Focus’ are brought to manifest in different ways. When you first earn a Focus, select one of the following.`,
            inline: false,
        },     
    ]);

    await interaction.reply({
      embeds: [embed], files: [file]
    });
  },
};
