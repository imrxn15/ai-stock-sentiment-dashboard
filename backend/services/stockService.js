const YahooFinance = require("yahoo-finance2").default;

const yahooFinance = new YahooFinance(); // 👈 REQUIRED in v3+

const getStockData = async (ticker) => {
  try {
    const result = await yahooFinance.quote(ticker);

    return {
      price: result.regularMarketPrice,
      change: result.regularMarketChange,
      percent: result.regularMarketChangePercent,
    };
  } catch (error) {
    console.error("Stock API Error:", error.message);
    return null;
  }
};
const getHistoricalData = async (ticker, range = "7d") => {
  try {
    const period2 = new Date();
    const period1 = new Date();

    let interval = "1d";

    if (range === "1d") {
      period1.setDate(period2.getDate() - 1);
      interval = "5m"; // 🔥 key difference
    } 
    else if (range === "7d") {
      period1.setDate(period2.getDate() - 7);
      interval = "1d";
    } 
    else if (range === "1mo") {
      period1.setMonth(period2.getMonth() - 1);
      interval = "1d";
    }

    const result = await yahooFinance.chart(ticker, {
      period1,
      period2,
      interval,
    });

    const quotes = result.quotes || [];

    const prices = quotes.map((q) => q.close).filter(Boolean);
    const dates = quotes.map((q) =>
      new Date(q.date).toLocaleDateString()
    );

    return { prices, dates };
  } catch (error) {
    console.error("History API Error:", error.message);
    return { prices: [], dates: [] };
  }
};
module.exports = { getStockData, getHistoricalData };
