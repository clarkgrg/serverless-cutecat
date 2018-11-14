let axios = require('axios');

const fetchCat = async () => {
  const apiKey = process.env.apiKey;
  const max = 25;
  const queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cute+cats&limit=${max}`;

  const response = await axios.get(queryUrl);
  const index = Math.floor(Math.random() * Math.floor(max));

  return {
    title: response.data.data[index].title, 
    url: response.data.data[index].images.downsized.url,
    height: response.data.data[index].images.downsized.height,
    width: response.data.data[index].images.downsized.width
  };
}

module.exports = {
  fetchCat
};
