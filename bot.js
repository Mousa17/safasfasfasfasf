const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("569507593232580621")
setInterval(function() {
channel.send(`MzU3ODU1OTIwMzA4MzU1MDcy.XLxspw.K_HlX97jsNCfUSQbYJom_fCRqVE`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
