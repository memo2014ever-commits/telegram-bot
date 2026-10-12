const { Telegraf } = require('telegraf');
const bot = new Telegraf('8245297945:AAEi_075c3ajEBydw6qAMb-A1D7KP63a6CM');

bot.start((ctx) => ctx.reply('أهلاً بك!'));
bot.on('text', (ctx) => ctx.reply(`وصلتني رسالتك: ${ctx.message.text}`));

module.exports = async (req, res) => {
  try {
    if (req.method === 'POST' && req.body) {
      await bot.handleUpdate(req.body);
    }
    return res.status(200).send('OK');
  } catch (err) {
    return res.status(200).send('OK');
  }
};
