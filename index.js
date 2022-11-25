const { Telegraf } = require('telegraf');



const bot = new Telegraf('5986039498:AAF84WRgAY3-kANmiis0SVJ4x7sto1La7eA');

bot.start((ctx) => ctx.reply('Welcome to the new coding bot from Manish'));
bot.command('Joke' , (ctx) => ctx.reply("This Bot!"));

bot.launch();