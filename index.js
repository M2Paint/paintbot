const discord = require("discord.js");
const bot = new discord.Client();
var prefix = "m2.";
bot.on('ready', function() {
    console.log('PaintBot has been loaded!')
    bot.user.setGame(prefix + "help - commmands!");
    bot.user.setPresence({status: "online"});
});
var riddles = [
    "What can travel around the world while staying in a corner?",
    "What has a head and a tail, but no body?",
    "What gets wetter and wetter the more it dries?",
    "There was a green house. Inside the green house there was a white house. Inside the white house there was a red house. Inside the red house there were lots of babies. What is it? ",
    "Take off my skin - I won't cry, but you will! What am I?",
    "What is at the end of a rainbow?",
    "What occurs once in every minute, twice in every moment, yet never in a thousand years?",
    "What is it that's always coming but never arrives?",
    "What goes through towns and over hills, but never moves?",
    "David's father has three sons : Snap, Crackle and _ ?",
    "What has many keys, but can't even open a single door?",
    "Tall I am young, Short I am old, While with life I glow, Wind is my foe. What am I?"
];
var fortunes = [
    "Probably not",
    "Probably",
    "Nahh",
    "Yeah!",
    "Try again later!",
    "More than likely...no",
    "Maybe",
    "Maybe not",
    "Might not happen",
    "It's possible"
];
bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "help":
            message.channel.sendEmbed({
                color: 3447003,
                title: "Commands - prefix is '" + prefix + "'",
                fields: [
                {
                    name: "Myavatar",
                    value: "Gives you your avatar link."
                },
                {
                    name: "8Ball",
                    value: "Ask any question!"
                },
                {
                    name: "Riddle",
                    value: "Answer some sweet riddles provided by Physx."
                },
                {
                    name: "Meme",
                    value: "Dank!"
                }
                ]
            });
            break;
        case "ping":
            message.channel.send("pong!");
            break;
        case "myavatar":
            message.channel.send(message.author.avatarURL);
            break;
        case "8ball":
            if (args[1]) {
                message.channel.sendEmbed({
                    title: "8ball",
                    description: fortunes[Math.floor(Math.random() * fortunes.length)]
                });
            } else {
                message.reply("Don't forget to add arguments! :wink:")
            };
            break;
        case "riddle":
            var chosen_riddle = Math.floor(Math.random()*riddles.length)
            message.channel.sendEmbed({
                title: "RIDDLES",
                description: riddles[chosen_riddle]
            });
            break;
        case "meme":
            var amount = 46
            var random = Math.floor(Math.random()*amount)
            message.channel.sendFile("memes/" + random + ".jpg")
            break;
        default:
            message.reply("That's not a command! Did you spell something incorrectly? :thinking:");
    };
});
bot.login('Mjk3MTI1MDY1NTkyNDA2MDE2.DAuZUQ.0WFPZrvk_fXdJmlQSKcilrfJ1h0');