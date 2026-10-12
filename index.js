const { Telegraf } = require('telegraf');

// كتبنا التوكن هنا بشكل مباشر
const bot = new Telegraf('8245297945:AAEi_075c3ajEBydw6qAMb-A1D7KP63a6CM');

bot.start((ctx) => ctx.reply('أهلاً بك! البوت شغال تمام على Vercel 🚀'));
bot.on('text', (ctx) => ctx.reply(`وصلتني رسالتك: ${ctx.message.text}`));

module.exports = async (req, res) => {
  try {
    let body = req.body;
    if (typeof body === 'string') {
      body = JSON.parse(body);
    }
    
    if (body) {
      await bot.handleUpdate(body);
    }
    
    res.status(200).send('OK');
  } catch (error) {
    console.error('Error handling update:', error);
    res.status(200).send('OK');
  }
};
