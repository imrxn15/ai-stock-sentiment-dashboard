const OpenAI = require("openai");

const analyzeArticle = async (text) => {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return { summary: "Missing key", sentiment: "Neutral", confidence: 0 };
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `
Analyze this stock news and return ONLY JSON:

{
  "summary": "2 sentence summary",
  "sentiment": "Bullish | Bearish | Neutral",
  "confidence": number (0-100)
}

News:
${text}
          `,
        },
      ],
    });

    const content = response.choices?.[0]?.message?.content;

    // Try parsing JSON safely
    try {
      return JSON.parse(content);
    } catch {
      return {
        summary: content,
        sentiment: "Neutral",
        confidence: 50,
      };
    }
  } catch (error) {
    console.error("AI Error:", error.message);
    return { summary: "AI failed", sentiment: "Neutral", confidence: 0 };
  }
};

module.exports = { analyzeArticle };