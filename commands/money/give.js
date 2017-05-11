const commando = require('discord.js-commando');
sqlite = require('sqlite');
const fs = require('fs');
const ytdl = require('ytdl-core');
const opus = require('node-opus');
const config = require("C:/Users/daybo/Desktop/ovelords_bot_2.0/money.json");

class MoneyCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "give",
            group: "money",
            memberName: "give", 
            description: "Give a user an amount of money by id",
            details: "User needs to have admin permissions on the server. Give a user an amount of money by id",
            examples: ["give 133210144454346494 100"]
        });
    }

    run(message, args) {
    let is_admin = message.member.hasPermission("ADMINISTRATOR")
    if (is_admin != true) 
    {
        message.reply("You do not have permission to use this command")
      return;
    }
    let data = message.content.split(" ");
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
    });
    }
}


module.exports = MoneyCommand;