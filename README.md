---
# 💎 Instagram Media Bot

This is a Telegram bot that fetches media (photos and videos) from Instagram links and sends them to users. It's built using Fastify, Nodemon, Axios, and dotenv, making it a fast and efficient solution for handling Instagram links.

## ✅ Technologies Used
- **Fastify:** A high-performance, low overhead web framework for Node.js.
- **Nodemon:** A utility that monitors for changes in your source code and automatically restarts your server.
- **Axios:** A promise-based HTTP client for making HTTP requests to fetch Instagram media.
- **dotenv:** A zero-dependency module for loading environment variables from a `.env` file.

## ⚙️ Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/diegormirhan/instagram-downloader.git
   cd instagram-downloader
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root directory and add the following environment variables:
   ```env
   RAPID_API_KEY=your-rapid-api-key
   RAPID_API_HOST=your-rapid-api-host
   TELEGRAM_API=your-telegram-api-token
   ```

   You can obtain the `RAPID_API_KEY` and `RAPID_API_HOST` by signing up for the [Instagram Looter2 API on RapidAPI](https://rapidapi.com/iq.faceok/api/instagram-looter2).

4. Start the server in development mode using Nodemon:
   ```bash
   npm run dev
   ```

5. Start using your Telegram bot! Send it Instagram links (except for stories), and it will reply with the media files.

## 📍 Note

Before using the Instagram Looter2 API, make sure to sign up for an API key and host on RapidAPI as mentioned in step 3. This will allow your bot to access the Instagram media data.

Feel free to customize and extend this bot to fit your needs. Happy coding!

## ⚠️ Disclaimer

This project is entirely my own creation, developed from scratch, leveraging various APIs to create a Telegram bot capable of fetching Instagram media content. It's a testament to my skills in full-stack development and showcases my proficiency in using technologies like Fastify, Nodemon, Axios, and dotenv to build efficient and user-friendly solutions.

---
