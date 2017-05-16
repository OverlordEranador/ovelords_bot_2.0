const commando = require('discord.js-commando');
const bot = new commando.Client({
    prefix: "-"
});
sqlite = require('sqlite');
const fs = require('fs');
const ytdl = require('ytdl-core');
const opus = require('node-opus');
const config = require("C:/Users/daybo/Desktop/ovelords_bot_2.0/money.json");


class BuyrankCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "buyrank",
            group: "money",
            memberName: "buyrank", 
            description: "buy a custom rank on your server",
            details: "first specify the name of the rank and after that the color you want",
            examples: ["buyrank overlord red"]
        });
    }

    run(message, args) {
    let data = message.content.split(" ");
    let name = data[1];
    let color = data[2];
    let cost = 400;
    let money = JSON.parse(fs.readFileSync("C:/Users/daybo/Desktop/ovelords_bot_2.0/money.json", "utf8"));
    if (!money[message.author.id]) money[message.author.id] = {
        money: 0
     };
    let userData = money[message.author.id];
    console.log(userData.money);
    if(userData.money < cost){
        message.reply("you don't have eneugh gold to buy this.");
        return;
    }
    userData.money -= cost+0;
    message.client.users.get('137920111754346496').send(`${message.author.tag} has requested the role: ${name} with the color: ${color}.`);
    console.log("dm send")
    message.reply("You have requested the role: "+name+" with the color: "+color+". A message is send to the server owner and will be processed ASAP.");
    
    fs.writeFile("C:/Users/daybo/Desktop/ovelords_bot_2.0/money.json", JSON.stringify(money), (err) => {
         if (err) console.error(err)
    });
    }
}


module.exports = BuyrankCommand;