const TelegramBot = require('node-telegram-bot-api');
const { instaScrapper } = require('./insta')
require('dotenv').config()

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_API;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Send me any Instagram link(except for stories) below and I'll send it back to you as a media file");
});

bot.on('message', (msg) => {
  if (msg.text && msg.text.startsWith("https://instagram.com/")) {
    try {
      const post = instaScrapper(msg.text)
      console.log(post);
      const chatId = msg.chat.id;
      if (post.length > 0) {
        post.forEach(media => {
          if (media.type === 'photo') {
            bot.sendPhoto(chatId, media.link);
          }
          else if (media.type === 'video') {
            bot.sendVideo(chatId, media.link);
          } else {
            bot.sendMessage(chatId, 'Houve um erro ao enviar o seu link, tente novamente mais tarde')
          } 
        })
      } else {
        bot.sendMessage(chatId, 'Não foi possível encontrar a mídia desse link.')
      }
    } catch (err) {
      console.log(err);
      bot.sendMessage(chatId, 'Ocorreu um erro ao processar o link. Tente novamente!')
    }
  }

})