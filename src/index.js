/*
    Tutorial discord bot to practice getting the bot online
*/

// connect .env file for discord bot key security
require('dotenv').config();

// necesary objects required from node.js
const {Client, IntentsBitField, EmbedBuilder} = require('discord.js');

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
CLIENT.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()){
        return;
    }

    if(interaction.commandName === 'embed'){
        const embed = new EmbedBuilder()
        .setTitle ("Embed title")
        .setDescription("Embed description")
        .setColor("Random")
        .addFields({
            name: "Field title",
            value: "Value",
            inline: true
        });

        interaction.reply({embeds: [embed]});
    }
})

// connect to the bot using its token (hidden in .env file)
CLIENT.login(process.env.DISC_TOKEN);