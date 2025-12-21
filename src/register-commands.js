/*
    Temporary file to learn about bot commands
*/

// connect .env file for discord bot key security
require('dotenv').config();

// necesary objects required from node.js
const {REST, Routes, managerToFetchingStrategyOptions, ApplicationCommandOptionType} = require('discord.js');

const COMMANDS = [
    {
        name: "add",
        description: "Adds two numbers",
        options: [
            {
                name: "first-number",
                description: "First number to be added",
                type: ApplicationCommandOptionType.Number,
                choices: [
                    {
                        name: "1",
                        value: 1
                    },
                    {
                        name: "2",
                        value: 2
                    },
                    {
                        name: "3",
                        value: 3
                    }
                ],
                required: true
            },
            {
                name: "second-number",
                description: "Second number to be added",
                type: ApplicationCommandOptionType.Number,
                required: true
            },
        ]
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