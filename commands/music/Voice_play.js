const commando = require('discord.js-commando');
sqlite = require('sqlite');
const fs = require('fs');
const ytdl = require('ytdl-core');
const opus = require('node-opus');

class PlayCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "play",
            group: "music",
            memberName: "play", 
            description: "Feature is WIP" 
        });
    }

   run(message, args) {
       message.reply(`Feature is WIP`);
       if(true)
       {
        const channelConnection = message.guild.voiceConnection;
        channelConnection.playFile("C:/Users/daybo/Desktop/ovelords_bot_2.0/commands/music/Music/samir.mp3")
        message.reply("playing music right now.")
        
        }       
    }
}


module.exports = PlayCommand;