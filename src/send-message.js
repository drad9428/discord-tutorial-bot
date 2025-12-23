/*
    Tutorial discord bot to practice getting the bot online
*/

// connect .env file for discord bot key security
require('dotenv').config();

// necesary objects required from node.js
const {Client, IntentsBitField, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js');

// setup for things bot will be using (needs permissions from discord server)
const CLIENT = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, // "server"
        IntentsBitField.Flags.GuildMembers, // "users"
        IntentsBitField.Flags.GuildMessages, // "messages"
        IntentsBitField.Flags.MessageContent, // "message content"
    ]
});

const ROLES = [
    {
        id: "1452867083804344322",
        label: "red" // for add/remove button
    },
    {
        id: "1452867201412497596",
        label: "green" // for add/remove button
    },
    {
        id: "1452867246908117113",
        label: "blue" // for add/remove button
    }
]

// sends message to console confirming bot is online
CLIENT.on('clientReady', async (client) => {
    try{
        console.log("Retrieving channel cache")
        const CHANNEL = await CLIENT.channels.cache.get("1257509554581929997");
        console.log("Cache recieved")

        if(!CHANNEL) return;

        console.log("Channel exists")
        const ROW = new ActionRowBuilder();

        console.log("Creating buttons")
        ROLES.forEach((role) =>{
            ROW.components.push(
                new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
            )}
        );
        console.log("Buttons created")

        console.log("Sending message")
        await CHANNEL.send({
            content: "Add/remove roles",
            components: [ROW]
        });
        console.log("Message sent")

        process.exit();
    }
    catch (error){
        console.log(error)
    }
    console.log(`${client.user.tag} is online`);
})

CLIENT.login(process.env.DISC_TOKEN);