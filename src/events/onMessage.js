const { generateReply } = require('../services/chatGptService');

async function onMessage(message) {
    console.log(`Message received: ${message.body}`);

    // Exemplo: Responder automaticamente a mensagens que começam com "#"
    if (message.body.startsWith("#")) {
        const reply = await generateReply(message.body.substring(1));
        message.reply(reply);
    }
}

module.exports = onMessage;
