const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('أهلاً بك! البوت شغال تمام على Vercel 🚀'));
bot.on('text', (ctx) => ctx.reply(`وصلتني رسالتك: ${ctx.message.text}`));

module.exports = async (req, res) => {
  try {
    // التأكد من استلام البيانات بشكل صحيح
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
    res.status(200).send('OK'); // بنرجع 200 عشان تلجرام ما يفضلش يعيد إرسال الطلب
  }
};
