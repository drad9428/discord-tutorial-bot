require('dotenv').config();
const { Client, Intents } = require('discord.js');

const PREFIX = '!';

const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.on('message', (message) => {
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring()
            .split(/\s+/)
        if (CMD_NAME === 'poll') {
            message.channel.send('React to this message to vote');
        }
    }
})

client.login(process.env.DISCORD_BOT_TOKEN);