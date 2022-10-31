const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require("discord.js");
const file = new AttachmentBuilder('./assets/Map.png');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("rules-world")
    .setDescription("Information relating to The world of Henge!"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("World")
      .setColor(0x18e1ee)
      .setThumbnail(`https://s1.zerochan.net/Church.600.792560.jpg`)
      .setImage('attachment://Map.png')
      .addFields([
        {
          name: `The Grand Dome (World Centre)
          `,
          value: `Home to the largest henge field of all, the grand dome’s territory spans almost 6 hours travel from the Dome. This area has some of the most moderate climate and landscape of the world. The plains are flat and fertile, and provide a reliable harvest each year. All manner of weather patterns can be observed drifting in from other areas.
          Most Clergy are raised to be polite and dignified, but there's a huge amount of variance among them, having been brought in from so many different cultures and backgrounds. The lack of any aspect in the dome has allowed the jumbled culture to settle into place. That culture is one of polite moderation. For the many clergy who travel through aspects, it often gives a sense of calm to be able to escape from the rapidly changing world beyond.
          `,
          inline: false,
        },
        {
            name: `Home Green (The Pastures)`,
            value: `The rolling hills of Home Green benefit from the same climes as The Pastures of The Grand Dome. Being a common throughway for the Clergy, the population of the most Dangerous beasts are regularly culled. However, this makes it a haven for the beasts of other zones fleeing from their less hospitable environments.
            The townships of Home Green also offer much of their culture to the constant presence of the Clergy. Being so close to the centre of the world, the culture of those in the grassy plains is one of few extremes or notable peculiarities compared with the central clergy themselves. Though the changing aspects of the Henges of course have a great impact on their day to day behaviour as well.`,
            inline: false,
        },
        {
            name: `The Crags (North)`,
            value: `Steep crevices cut from the sandy earth criss cross the seemingly lifeless barrens of the Crags. The sun bakes the rock over the day, and cold winds falling from the Ore piles strip the heat from the surface at night. The chasms below link together in vast networks through canyons and caves. Protected from the worst of the elements, the linking streams and caves are host to all manner of dangerous beasts.
            The people of The Crags use instruments of clay, whose harmonic tones reverberate within houses cut into stone. Many Crag villages make decisions communally, sometimes using gemstones as symbols of authority. Local cacti are harvested for their fibres, which are pulled and spun to create rough fabric. Luckily, the warmth trapped by the tunnels allows for scant clothing, covering only the feet and waist. Small tablets of clay are used for writing and recording, being baked hard and stacked in storage rooms for keeping. Much smaller tiles have intricate symbols drawn upon them for use in games.
            `,
            inline: false,
        },
        {
            name: `Ore Piles (North East)`,
            value: `Vast masses of rocky land rise up into the clouds, littered with caves and mines rich in ores. At the foot of the mountains, runoff water and dirt mix into a shallow bog. Travel in the region is tough and slow, requiring climbing and pathing, and constant doubling back. Creatures in the Mountains and Bogs take advantage of this to hunt their prey.
            The clans of the mountains live in towns half cut into the rock, and half built out into the sky, supported by large struts of solid stone. Much of their diet is made up of hardy root vegetables, supplemented with meats hunted from the surrounding areas. The beast’s corpses are not wasted, their hides being used for clothing, leather for drums, and bones for jewellery and dice.
            Those in the bogs build rock brick houses atop piles of carefully stacked flat stones, plugging the gaps with reeds and mud. Small tufts of fluff picked from those reeds are also spun into fibres and weaved into soft clothing. Their diets are mostly made of odd fruits, and squashes, with fish as a rare treat. The travel enabled by rafts also allows them to trade culture and foods with the Crags and the Shimmersands, though the Ore Piles are more difficult to reach.
            `,
            inline: false,
        },
        {
            name: `Shimmersands (East)
            `,
            value: `Though there is precious little water in the east, the horizon taunts it always. Navigating the sands is a near impossible task with no landmarks for miles around. The sands shift into flats and hills with gusts of the wind, blinding the eyes and mind alike. In the day, the sun releases a crippling heat, but with it gone in the night, the cloudless sky touches the land with the cold of the void. Though there are a few Oases’ dotted through the sands, they are dangerous places, swarming with beasts for much of the night and day.
            The locales of the Shimmersands construct walls of sandstone around each Henge. Rather than a defence against beasts or visitors, the wall acts as first defence against the gritty winds that wear away at all but the hardiest of structures. Within, large tents constructed mostly of animal hides, resistant to the sands and easy to repair.
            Clothing is tough to come by, either being woven from the fibres of oasis plants, or the leathers cut from a beast. Nevertheless, full coverage is vital to protect from the sand, so apparel is worn to the point of destruction, repaired, and worn again.
            So desperate are some of the Henges in the Shimmersands, that the people have been known to attempt to harness beasts for transport, and even to harvest for fur or milk. The Clergy warn against this reckless practice, which has been known to cause the downfall of henges in the past.
            `,
            inline: false,
        },
        {
            name: `Glass Flats (South East)`,
            value: `Structures of rising crystal spikes scatter the otherwise featureless surface of the endless ice. The sharp sprinkled snow gathers at the spikes, forming slight shelter. Slow constant winds pull warmth from travellers, freezing anything exposed. There are few Beasts in the Glass flats, but almost all are mortally dangerous.
            There are no surviving Henges in the Glass flats, and as such, no culture or people to speak of. Due to the inaccessibility of the area, Clergy visits were rare, and so precise records do not exist. However, it is believed that a series of worsening winters made the ice too thick to cut through for fishing, starving the residents. With no people to follow their aspects, the Henges would have perished quickly.
            `,
            inline: false,
        },
        {
            name: `Soft Walks (South)`,
            value: `Rolling dunes of snow roll out in all directions. In the day, the crisp white snow becomes blinding in the light of the sun. In the night, even the little light from the sky is enough to illuminate the whole landscape. The region’s many snowstorms bury any attempt to create roads, and hide the lairs of dangerous beasts. In places, the snow can be several feet deep, and when freshly laid, may not support a person’s weight, making a cold grave for the careless.
            Those of the South build their homes out of domes of ice and snow. The homes stand sturdy against the weather, as well as offering a surprising amount of warmth. A southern diet is one almost entirely composed of meats prepared in a variety of ways. Bones are taken and presented to master craftsmen, who designate worthy bones for jewellery, game pieces, or to be crafted into prized woodwind instruments. Those instruments are awarded as accolades, and having one is seen as a mark of honour and respect.
            Travel is slow and perilous, making travel at more than a walking pace almost impossible, and even that requires wide adapted boots to prevent sinking into the snow. However, luggage can be easily pulled along with just a snow raft and a rope. Due to the rarity of trade arrivals, both parchment and charcoal are highly coveted, and written knowledge is sealed away safely.
            `,
            inline: false,
        },
        {
            name: `Frozen Tusks (South West)`,
            value: `Desperately harsh winds fall from the walls of ice and snow that make up the Frozen Tusks. Just a little disturbed snow can cause a knock on effect leading to a catastrophic avalanche. Almost equally dangerous, an uncovered cave can release a host of unfamiliar beasts which have been lying dormant for decades. The scarcity of food makes beasts in the Tusks especially aggressive and prone to attack.
            Tusk villages do not have separate individual homes, but rather share the communal space of the cave cut from the mountain. The locals primarily subsist on mosses and mushrooms grown deeper into the mountain. This supplemented with rare meals of meat when a beast is felled, and dry foods gained in trade with the west. Ice cold lakes nestled amongst the peaks are managed for fresh water, and a risky source of freshwater fish. Even then, this sustains only a very small population.
            The people of the Tusks like to be communal. They will often be singing, story telling, doing communal carvings, or drawings on the walls. The drawings will rarely be kept for long, nor the stories continued, before they are erased, or forgotten, and begun anew.
            Henges in the Tusks began to use beasts extensively, cultivating them like plants, harvesting their furs and even riding them for travel. Though the Clergy desperately advised against it, the people would not listen. The beasts, having gained the humans' trust, waited until one nasty winter, when they knew the humans would be weak and unfed. They turned on the people who had shown them kindness and showed no mercy in return. Though many were able to retreat to their Henges, their winter stores had been exhausted, and they had come to rely on their beasts. By the time the next Clergy envoy arrived, all that remained were perished Hengestones, and the regretful warnings left by people betrayed. It is thought that only one Hengestone remains in the Frozen Tusks.
            `,
            inline: false,
        },
        {
            name: `Mangroves (West)
            `,
            value: `Twisted roots tie together over a vast reservoir of freshwater. Thick fog creates ominous shadows and claustrophobic views. The water underneath, an unknown depth, writhing with Beasts of unknown numbers and sizes. The evergreen canopy holds the swirling mist, and hot air, creating a hot humid climate even despite the lack of sun piercing the branches.
            Mangrove homes are built upon small wooden rafts, all moored together around the central henge stone. For many locals, the closest they’ve ever been to standing on dry land, is standing on a root while they pluck berries or cut wood to maintain their rafts and fishing nets.
            Alongside the obvious diet of fish, fruit and berries, the people of the mangroves have also found a surprising number of ways to prepare roots for eating. With such heated and humid climate, many wear barely enough to maintain modesty. The hollow branches of the mangrove trees are cut to shape such that they make a musical tone when struck, which are used for a variety of vastly different instruments. Skilled artisans in the mangroves harvest certain leaves and roots, pulping and drying them in such a way as to create a brittle paper.
            `,
            inline: false,
        },
        {
            name: `The Timbers (Near North West)/ Salt Flats (Far North West) (Merged due to discord embeds being a fuck)
            `,
            value: `Thick tree trunks raise up into the sky, connection with canopies of branches obscuring the sky. A thick of fallen leaves and dense brush scatter the ground, and all kinds of shrubbery scarf up every scrap of light that reaches the forest floor. The Timbers reflect the changing of the seasons more so than anywhere else, the climate and landscape almost unrecognisable between them. The beasts of the Timbers hide behind trunks and amongst branches and brush.
            Cabins in the timbers are mostly built of huge wooden logs. Some have chimneys built of stone, though due to the scarcity of the necessary materials, and difficulty of building, this is usually reserved for the larger buildings. Much of the Timber’s clothing is made with ferns, with hides and furs being rarer than in much of the rest of the world.
            It is from the Timbers that Woodwind instruments get their name. Instruments are so common, that only the exceptional ones are coveted at all. Despite being capable of making paper, those of the Timbers tend not to use it when it can be avoided, preferring to tell stories round the fire.
            \n\n Salt flats - The further North West one travels, the more barren the land becomes. The dirt becomes dry and gritty. Before long, patches of white salt are almost as common as the dirt itself, and the surface of the ground cracks into strange geometric shapes. Dangerous beasts prowl the salts, hungry for even the slightest sign of life.
`,
            inline: false,
        },
    ]);

    await interaction.reply({
      embeds: [embed], files: [file]
    });
  },
};
