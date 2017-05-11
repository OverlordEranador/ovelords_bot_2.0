const commando = require('discord.js-commando');
sqlite = require('sqlite');
const fs = require('fs');
const ytdl = require('ytdl-core');
const opus = require('node-opus');

class JoinCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "join",
            group: "music",
            memberName: "join", 
            description: "Joins the voicechannel you are in" 
        });
    }

   run(message, args) {
        const channel = message.member.voiceChannel;
        channel.join()
        .then(connection => console.log('Connected!'))
        .catch(console.error);
    }
}


module.exports = JoinCommand;