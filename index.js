const { Telegraf } = require('telegraf');

const bot = new Telegraf('8245297945:AAEi_075c3ajEBydw6qAMb-A1D7KP63a6CM');

bot.start((ctx) => ctx.reply('أهلاً بك! البوت شغال تمام على Vercel 🚀'));
bot.on('text', (ctx) => ctx.reply(`وصلتني رسالتك: ${ctx.message.text}`));

module.exports = async (req, res) => {
  // رد مباشر بسرعة لتليجرام عشان يمنع التأخير (Timeout)
  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (body) {
        await bot.handleUpdate(body);
      }
    } catch (e) {
      console.error(e);
    }
    return res.status(200).json({ status: 'ok' });
  }

  return res.status(200).send('Bot is active!');
};