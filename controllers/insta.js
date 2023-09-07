const axios = require('axios');
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
      return response.data.data.medias;
  } catch (error) {
      return error;
  }
}

/* (async () => {
  try {
    const result = await instaScrapper('https://www.instagram.com/p/CqIbCzYMi5C/');
    
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();
 */
module.exports = instaScrapper