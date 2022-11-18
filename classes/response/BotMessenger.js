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
        ["quint", "Ahh, the Magpie."],
        ["layla", "Totally normal child human girl."],
        ["darn", "PLEASE MIND YOUR LANGUAGE"],
        ["damn", "PLEASE MIND YOUR LANGUAGE"],
        ["bum", "PLEASE MIND YOUR LANGUAGE"],
        ["shoot", "PLEASE MIND YOUR LANGUAGE"],
        ["nuts", "PLEASE MIND YOUR LANGUAGE"],
        ["dagnabbit", "PLEASE MIND YOUR LANGUAGE"],
        ["balderdash", "PLEASE MIND YOUR LANGUAGE"],
        ["crikey", "PLEASE MIND YOUR LANGUAGE"],
        ["hell", "PLEASE MIND YOUR LANGUAGE"],
        ["gordon bennett", "PLEASE MIND YOUR LANGUAGE"],
        ["gordon bennet", "PLEASE MIND YOUR LANGUAGE"],
        ["geeze", "PLEASE MIND YOUR LANGUAGE"],
        ["goldnose", "What a kiss up"],
        ["gold-nose", "What a kiss up"],
        ["gold", "What a kiss up"],
        ["brown", "Don't you mean gold"],
        ["good girl", ";)"],
        ["you rock", "Cancel that. NO, NO."],
        ["bait", "Shark bait hoo ha ha"],
        ["gg", "GG"],
        ["bg", ":("],
        ["wolf", "What's a wolf?"],

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