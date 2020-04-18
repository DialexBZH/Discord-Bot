const Discord = require ('discord.js');

module.exports.run = (client, message, args) => {
let embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Voici la liste de mes commandes:')
	.setDescription('Mon préfix est s!')
	.addField('!ping', "Le bot répond pong.", true)
message.channel.send(embed);
};


module.exports.help = {
    name: "help"
};