const commando = require('discord.js-commando');
sqlite = require('sqlite');
const fs = require('fs');
const ytdl = require('ytdl-core');
const opus = require('node-opus');

class LeaveCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "leave",
            group: "music",
            memberName: "leave", 
            description: "leaves the voicechannel the bot is in" 
        });
    }

   run(message, args) {
        const channel = message.member.voiceChannel;
        channel.leave()
    }
}


module.exports = LeaveCommand;