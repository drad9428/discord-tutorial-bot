/*
    Tutorial discord bot to practice getting the bot online
    git test line (delete this line)
*/

// necesary objects required from node.js
const {Client, IntentsBitField} = require('discord.js');

// connect .env file for discord bot key security
const env = require('dotenv').config();

// setup for things bot will be using (needs permissions from discord server)
const CLIENT = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, // "server"
        IntentsBitField.Flags.GuildMembers, // "users"
        IntentsBitField.Flags.GuildMessages, // "messages"
        IntentsBitField.Flags.MessageContent, // "message content"
    ]
});

// sends message to console confirming bot is online
CLIENT.on('clientReady', (client) => {
    console.log(`${client.user.tag} is online`);
})

// when a message is sent, if it's not from the bot, bot repeats message
CLIENT.on('messageCreate', (message) => {
    if (message.author.bot){
        return;
    }

    message.reply(message.content);
})

// connect to the bot using its token (hidden in .env file)
CLIENT.login(process.env.DISC_TOKEN);