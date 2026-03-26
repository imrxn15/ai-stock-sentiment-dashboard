const express = require("express");
const router = express.Router();
const { getNews } = require("../services/newsService");
const { analyzeArticle } = require("../services/aiService");
const { getStockData, getHistoricalData } = require("../services/stockService");

router.get("/:ticker", async (req, res) => {
 
  try {
     const range = req.query.range || "7d";
    //console.log("RANGE RECEIVED:", range);
    const ticker = req.params.ticker;
    const history = await getHistoricalData(ticker, range);
    const stockInfo = await getStockData(ticker);
    const news = await getNews(ticker);
    const limitedNews = news.slice(0, 2);

    
    
    const analyzedNews = await Promise.all(
      news.map(async (article) => {
        const text = article.description || article.title;

        const ai = await analyzeArticle(text);

        return {
          title: article.title,
          analysis: ai,
          url: article.url,
        };
      })
    );
let score = 0;

analyzedNews.forEach((item) => {
  const sentiment = item.analysis.sentiment;

  if (sentiment === "Bullish") score += 1;
  else if (sentiment === "Bearish") score -= 1;
});

const overallScore = score / analyzedNews.length;

const sentimentPercentage = Math.round(((overallScore + 1) / 2) * 100);

    res.json({
  sentimentPercentage,
  stockInfo,
  history,
  analyzedNews,
});
  } catch (error) {
  console.error("FULL ERROR:", error);
  res.status(500).json({ error: error.message });
}
});

module.exports = router;