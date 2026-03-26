const axios = require("axios");

const getNews = async (ticker) => {
  try {
    const url = `https://newsapi.org/v2/everything?q=${ticker}&language=en&sortBy=publishedAt&apiKey=64488a7370664622aebc8810e47dd534`;
    

    const response = await axios.get(url);

    return response.data.articles.slice(0, 5);
  } catch (error) {
    console.error("News API Error:", error.message);
    return [];
  }
};

module.exports = { getNews };