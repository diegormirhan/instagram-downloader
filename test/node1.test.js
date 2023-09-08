const axios = require('axios');
require('dotenv').config()

const options = {
  method: 'GET',
  url: 'https://instagram-looter2.p.rapidapi.com/post-dl',
  params: {
    link: 'https://www.instagram.com/p/CqIbCzYMi5C/'
  },
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.RAPID_API_HOST
  }
};

// Run the tests
/* const test = async () => {
    try {
        const response = await axios.request(options);
        response.data.data.medias.forEach(media => {
            console.log(media.link)
        });
        console.log(response.data.data)

    } catch (error) {
        console.error(error);
    }
} */

test()