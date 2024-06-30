const TelegramBot = require('node-telegram-bot-api');
const instaScrapper = require('./insta')
require('dotenv').config()

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_API;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Send me any Instagram link(except for stories) below and I'll send it back to you as a media file");
});

bot.on('message', async (msg) => {
  if (msg.text !== '/start' && msg.text.includes('https://www.instagram.com/')) {
    try {
      bot.sendMessage(msg.chat.id, 'Processing your link, please wait...')
      const post = await instaScrapper(msg.text) // .medias, .caption
      console.log(post);
      const chatId = msg.chat.id;
      if (post.medias.length > 0) {
        post.medias.forEach(media => {
          if (media.type === 'image') {
            bot.sendPhoto(chatId, media.link);
          }
          else if (media.type === 'video') {
            bot.sendVideo(chatId, media.link);
          } else {
            bot.sendMessage(chatId, 'There was an error sending your link, please try again later')
          } 
        })
      } else {
        bot.sendMessage(chatId, 'Could not find the media for that link.')
      }

      const delay = ms => new Promise(resolve => {
        setTimeout(resolve, ms);
        bot.sendMessage(chatId, post.caption);
      });
      await delay(2000);
      
    } catch (err) {
      console.log(err);
      bot.sendMessage(chatId, 'An error occurred while processing the link. Try again!')
    }
  }

})