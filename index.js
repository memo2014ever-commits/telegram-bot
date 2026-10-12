const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// الرد على أمر /start
bot.start((ctx) => ctx.reply('أهلاً بك! البوت شغال تمام على Vercel 🚀'));

// الرد على أي رسالة نصية
bot.on('text', (ctx) => ctx.reply(`وصلتني رسالتك: ${ctx.message.text}`));

// دالة لمعالجة الطلبات من Vercel
module.exports = async (req, res) => {
  try {
    if (req.method === 'POST') {
      await bot.handleUpdate(req.body);
      res.status(200).send('OK');
    } else {
      res.status(200).send('Bot is running!');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
};
