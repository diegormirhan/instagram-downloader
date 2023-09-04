const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_API;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendVideo(chatId, 'https://instagram.fvno2-1.fna.fbcdn.net/v/t66.30100-16/122248807_260596793420753_5806150694878979722_n.mp4?_nc_ht=instagram.fvno2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=fph9I7P8inQAX-cWu7C&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfBTWyhVLkeFmyQVCvRfLkzrgGTqeefu6OCdfjYWVZdePA&oe=64F7BD3C&_nc_sid=2999b8');
});


