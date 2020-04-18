const Discord = require ('discord.js');

module.exports.run = (client, message, args) => {
    message.channel.send('Pong !')
};

module.exports.help = {
    name: "ping"
};