const commando = require('discord.js-commando');
sqlite = require('sqlite');
const fs = require('fs');
const ytdl = require('ytdl-core');
const opus = require('node-opus');

class LinusCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "linus",
            group: "random",
            memberName: "linus", 
            description: "Mention someone and they will get linused",
            examples: ["linus @person"]
        });
    }

    run(message, args) {
         message.channel.sendFile("Pictures/linus.png", "Pictures/linus.png")  
          if (true)
         {
             let args = message.content.split(" ").slice(1);
             message.channel.sendMessage("Yo "+args[0]+" , you just got linused by "+ message.author.username +"!")
             
         }
    }
}


module.exports = LinusCommand;