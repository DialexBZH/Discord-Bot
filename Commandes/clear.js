const Discord = require ('discord.js');

module.exports.run = (client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les permissions !");
    if(!message.guild.member(client.user).hasPermission("MANAGE_PERMISSION")) return message.channel.send("Je n'ai pas les permissions !");
    if(!args[0]) return message.channel.send("Vous devez spécifier un nombre de messages à supprimer !");
    if(isNaN(args[0])) return message.channel.send("Vous devez spécifier un nombre !");
    message.channel.bulkDelete(args[0]);
    message.channel.send(`${args[0]} messages ont été supprimé !`);
};

module.exports.help = {
    name: 'clear'
};