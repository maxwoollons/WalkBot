const mineflayer = require("mineflayer")
const autoeat = require("mineflayer-auto-eat")
 
const bot = mineflayer.createBot({
    host: '1b1t.tk', // optional
    port: 25565,       // optional
    username: 'vwoollons@outlook.com', // email and password are required only for
    password: 'Veronica99',          // online-mode=true servers
    version: false  
})
 
// Load the plugin
bot.loadPlugin(autoeat)
 
bot.once("spawn", () => {
  bot.autoEat.options = {
    priority: "foodPoints",
    startAt: 14,
    bannedFood: [],
  }
})


bot.on('spawn', () => {
    bot.setControlState('forward', true)
})





//bot.setControlState('forward', false)