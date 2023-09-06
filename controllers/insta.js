const axios = require('axios');
const bot = require('./bot');
require('dotenv').config();

//API
const APIKey = process.env.RAPID_API_KEY
const APIHost = process.env.RAPID_API_HOST

//Scrapping data from Instagram
const instaScrapper = async (url) => {
  const options = {
    method: 'GET',
    url: 'https://instagram-looter2.p.rapidapi.com/post-dl',
    params: {
      link: url
    },
    headers: {
      'X-RapidAPI-Key': APIKey,
      'X-RapidAPI-Host': APIHost
    }
  };

    try {
      const response = await axios.request(options);
        return response.data.data;
    } catch (error) {
        return error;
    }
  }

module.exports = instaScrapper;
