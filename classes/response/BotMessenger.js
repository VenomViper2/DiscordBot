class BotMessenger {
    //Map of words and bot responses to those words
    userMessageAndBotResponse = new Map([
        ["69", "69, nice."],
        ["(╯°□°）╯︵ ┻━┻", "┬─┬ノ(ಠ_ಠノ)"],
        ["gloomhaven", "GLOOOOOMHAVEN!!!"],
        ["reedtooth", "ALL HAIL REEDTOOTH!"],
        ["dankweed", ":no_smoking:"],
        ["mitch", "Sorry, do you mean Wendwillow?"],
        ["tom", "Sorry, do you mean Jerik?"],
        ["crab", "Sorry what is a crab? Do you mean Crawdad?"],
        ["dan", "Sorry, do you mean Nathair?"],
        ["ben", "Sorry, do you mean Demikas?"],
        ["hatfield", "Sorry, do you mean Layla?"],
        ["matt", "Sorry, do you mean Ned"],
        ["phil", "Sorry, do you mean... well I guess Phil is ok."],
        ["maz", "Sorry, do you mean Glass?"],
    ]);

    async responder(input, output, message) {
        if (message.author.bot) {
            return;
        }
        if (message.content.toLowerCase().split(" ").includes(input)) {
            await message.reply({content: output});
        }
    }
}

module.exports = BotMessenger;