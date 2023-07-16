import DJS, { Intents } from 'discord.js'
import WOK from 'wokcommands'
import path from 'path'
import 'dotenv/config'

//PERMISOS DEL BOT GUILDS ES SERVIDOR 
const client = new DJS.Client({
  intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.MESSAGE_CONTENT,
  ],
})

// FUNCION PARA INICIAR EL BOT 
client.on('ready', () => {
  new WOK(client, {
    commandsDir: path.join(__dirname, 'commands'),
    typeScript: true, 
    testServers: ['319490571502747648'],
  })
  console.log("the bot is ready")
})

client.login(process.env.TOKEN)