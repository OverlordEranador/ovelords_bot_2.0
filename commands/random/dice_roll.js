const commando = require('discord.js-commando');
sqlite = require('sqlite');
const fs = require('fs');
const ytdl = require('ytdl-core');
const opus = require('node-opus');

class DiceRollCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "roll",
            group: "random",
            memberName: "roll", 
            description: "Rolls a die",
            examples: ["roll 20"]
        });
    }

   run(message, args) {
        var roll = Math.floor(Math.random() * args) + 1;
        message.reply("You rolled a " + roll);
        
    }
}


module.exports = DiceRollCommand;