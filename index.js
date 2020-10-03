'use strict'

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Masuk sebagai ${client.user.tag}!`);
});

client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '$c fotoku') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
  // If the message is '!rip'
  if (message.content === '$c rip') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the message channel
    message.channel.send(attachment);
  }
});


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');

  if (!channel) return;
  channels.send(`Selamat datang ${member}`);
});


client.login('NzYxNTMzODA5MjI4NjQ0MzU1.X3b_oA.gdVHTzKf-vffjiHr9wSpzN_56b8');