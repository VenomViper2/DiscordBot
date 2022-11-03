class BotMessenger {

    async responder(input, output, message) {
        if (message.author.bot) {
            return;
        }
        if (message.content.toString().toLowerCase() === input) {
            await message.reply({content: output});
        }
    }
}

module.exports = BotMessenger;