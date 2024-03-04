require('dotenv').config();

const { OpenAI } = require('openai');

const openai = new OpenAI({
    apiKey: 'process.env.OPENAI_API_KEY',
});


async function generateReply(message) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error("Error with OpenAI API:", error);
        return "Desculpe, não consegui processar sua solicitação.";
    }
}

module.exports = { generateReply };
