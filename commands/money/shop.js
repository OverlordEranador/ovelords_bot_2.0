const commando = require('discord.js-commando');
sqlite = require('sqlite');
const fs = require('fs');
const ytdl = require('ytdl-core');
const opus = require('node-opus');
const config = require("C:/Users/daybo/Desktop/ovelords_bot_2.0/money.json");

class ShopCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "shop",
            group: "money",
            memberName: "shop", 
            description: "WIP",
            details: "WIP",
            examples: ["WIP"]
        });
    }

    run(message, args) {
   message.reply("this feature is WIP")
    /*let data = message.content.split(" ");
    let amount = data[2];
    let user = data[1];
    let shit = parseInt(amount, 10);
    let money = JSON.parse(fs.readFileSync("C:/Users/daybo/Desktop/ovelords_bot_2.0/money.json", "utf8"));
    if (!money[user]) money[user] = {
        money: 0
     };
    let userData = money[user];
    userData.money += shit+0;
    message.reply("You have added "+shit+" Gold to "+user+" wallet.");
    fs.writeFile("C:/Users/daybo/Desktop/ovelords_bot_2.0/money.json", JSON.stringify(money), (err) => {
         if (err) console.error(err)
    });*/
    }
}


module.exports = ShopCommand;