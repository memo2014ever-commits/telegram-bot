const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('أهلاً بك! البوت يعمل بنجاح 🎉'));

bot.on('text', (ctx) => ctx.reply(`انت كتبت: ${ctx.message.text}`));

module.exports = async (req, res) => {
  try {
    if (req.method === 'POST') {
      await bot.handleUpdate(req.body);
      res.status(200).send('OK');
    } else {
      res.status(200).send('Bot is running!');
    }
  } catch (error) {
    res.status(500).send('Error');
  }
};