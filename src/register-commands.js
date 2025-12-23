/*
    Temporary file to learn about bot commands
*/

// connect .env file for discord bot key security
require('dotenv').config();

// necesary objects required from node.js
const {REST, Routes, managerToFetchingStrategyOptions, ApplicationCommandOptionType} = require('discord.js');

const COMMANDS = [
    {
        name: "embed",
        description: "Sends an embed",
        
    },
]

const rest = new REST({version: '10'}).setToken(process.env.DISC_TOKEN);

(async () => {
    try {
        console.log("Registering Commands");

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            {body: COMMANDS}
        );

        console.log("Commands Registered")
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();