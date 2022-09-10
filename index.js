const { Client, GatewayIntentBits } = require("discord.js")

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,]
})

const mySecret = process.env['TOKEN2']

client.on("ready", () => {
  console.log(`Hello ${client.user.tag}!`)
})

client.on("messageCreate", msg => {
  if (msg.content == 'Zsyłam mada') {
    console.log('zesłano mada')
    msg.reply('https://pl.wikipedia.org/wiki/Adam_Ma%C5%82ysz')
  }
})

client.login(mySecret)
