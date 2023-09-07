const app = require('fastify')({
    logger: true
});
const axios = require('axios');
const telegramBot = require('node-telegram-bot-api');
const bot = require('./controllers/insta');
const insta = require('./controllers/bot');


//run the server
const start = async () => {
    try {
        await app.listen(process.env.PORT || 3000);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1)
    }
}

start()