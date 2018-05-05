
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login("NDQyMzIzMjQ2MTU1ODI1MTcz.Dc9JLw.rlrTitMyjaxsfMxy9N4LuU-5l_E");
