
const commando = require('discord.js-commando');
const bot = new commando.Client({
    commandPrefix: '-',
    owner: '137920111754346496'
});
const sqlite = require('sqlite');
const fs = require('fs');
const ytdl = require('ytdl-core');
const opus = require('node-opus');
const bank = require("./money.json");
const config = require("./config.json")
const path = require('path');


bot.setProvider(
    sqlite.open((__dirname, 'settings.sqlite3')).then(db => new commando.SQLiteProvider(db))
).catch(console.error);

bot.on("debug", (m) => console.log("[debug]", m));
bot.on("warn", (m) => console.log("[warn]", m));

var LOADDIR = "C:/Users/User/Music/"

bot.on("message", message => {
    if (message.author.bot) return;
});

bot.registry.registerGroup("random", "Random");
bot.registry.registerGroup("music", "Music");
bot.registry.registerGroup("money", "Money");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(config.token);

bot.on("ready", () => {
    console.log('Ready to serve as '+bot.user.username+"!");
    bot.user.setGame("as a slave to Overlord")
});


