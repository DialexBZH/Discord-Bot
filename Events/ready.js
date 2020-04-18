module.exports = bot => {
    console.log(`${bot.user.username} est en ligne !`);

    let statuses = [
        `${bot.user.username}`,
        `!help`,
        `En développement...`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: 'WATCHING'});
    }, 2000)
}
