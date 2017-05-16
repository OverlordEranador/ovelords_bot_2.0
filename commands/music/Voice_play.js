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
 const voiceChannel = message.member.voiceChannel;
 let data = message.content.split(" ");
    console.log(data[1])
    if (!voiceChannel) return message.reply(`Please be in a voice channel first!`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl(data[1], { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
      }); 
    }
}


module.exports = PlayCommand;