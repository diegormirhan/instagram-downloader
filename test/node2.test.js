const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://auto-download-all-in-one.p.rapidapi.com/v1/social/autolink',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'dc97e2e59cmsh44cafa16692679bp1a3336jsn2abe7313060f',
    'X-RapidAPI-Host': 'auto-download-all-in-one.p.rapidapi.com'
  },
  data: {
    url: 'https://twitter.com/i/status/1699483206041362895'
  }
};

const run = async () => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

run()