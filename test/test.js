const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://instagram-looter2.p.rapidapi.com/post-dl',
  params: {
    link: 'https://www.instagram.com/p/CqIbCzYMi5C/'
  },
  headers: {
    'X-RapidAPI-Key': 'dc97e2e59cmsh44cafa16692679bp1a3336jsn2abe7313060f',
    'X-RapidAPI-Host': 'instagram-looter2.p.rapidapi.com'
  }
};

const test = async () => {
    try {
        const response = await axios.request(options);
        response.data.data.medias.forEach(media => {
            console.log(media.link)
        });
        console.log(response.data.data)
    } catch (error) {
        console.error(error);
    }
}

test()