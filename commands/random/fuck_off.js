const commando = require('discord.js-commando');
sqlite = require('sqlite');
const fs = require('fs');
const ytdl = require('ytdl-core');
const opus = require('node-opus');

class FuckOffCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "fuck",
            group: "random",
            memberName: "fuck", 
            description: "mention someone to tell it to fuck off" ,
            examples: ["fuck @person"]
        });
    }

   run(message, args) {
         if(true)
         {
         let args = message.content.split(" ");
         message.channel.sendMessage(args[1]+"Fuck off you, you fat useless sack of fucking yankee dankee doodle shite! Fuck off will you please, yeah?");  
         }
    }
}


module.exports = FuckOffCommand;