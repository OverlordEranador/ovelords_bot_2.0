const commando = require('discord.js-commando');
sqlite = require('sqlite');
const fs = require('fs');
const ytdl = require('ytdl-core');
const opus = require('node-opus');



class MoneyCommand extends commando.Command {
    constructor(bot) {
        super(bot, {
            name: "wallet",
            group: "money",
            memberName: "wallet", 
            description: "see how much Gold you have" ,
            aliases: ["balance", "bank", "money"], 
            examples: ["wallet", "balance"]
        });
    }

   run(message, args) {
    let money = JSON.parse(fs.readFileSync("C:/Users/daybo/Desktop/ovelords_bot_2.0/money.json", "utf8"));
    if (!money[message.author.id]) money[message.author.id] = {
    money: 0,
    };
    let userData = money[message.author.id];
  
    message.reply(`You currently have ${userData.money} Gold.`);
   
    fs.writeFile("C:/Users/daybo/Desktop/ovelords_bot_2.0/money.json", JSON.stringify(money), (err) => {
        if (err) console.error(err)
    });
    }
}


module.exports = MoneyCommand;