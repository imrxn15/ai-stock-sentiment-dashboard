
# 📈 AI Stock Sentiment Dashboard

An interactive full-stack web application that analyzes stock sentiment using real-time news and market data, combined with AI-powered insights.

🚀 Features
📊 Live Stock Data
Fetches real-time stock prices and historical data
Interactive chart visualization
🧠 AI Sentiment Analysis
Uses OpenAI to analyze news articles
Classifies sentiment as Bullish / Bearish / Neutral
Provides summaries + confidence scores
📰 News Aggregation
Pulls recent stock-related news
Filters and analyzes relevant articles
📉 Dual Chart System
Custom chart (Chart.js)
TradingView advanced chart integration
🎨 Modern Dashboard UI
Clean dark theme
Responsive layout
Real-time updates on user input
🛠️ Tech Stack
Frontend
React.js
Chart.js
TradingView Widget
Backend
Node.js
Express.js
APIs & Services
OpenAI API (sentiment analysis)
Yahoo Finance API (stock + historical data)
News API (financial news)
📂 Project Structure
ai-stock-sentiment-dashboard/




⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/ai-stock-sentiment-dashboard.git
cd ai-stock-sentiment-dashboard
2. Backend Setup
cd backend
npm install

Create a .env file:

OPENAI_API_KEY=your_api_key_here

Run backend:

node server.js
3. Frontend Setup
cd frontend
npm install
npm start
📸 Screenshots

(Add screenshots here once you push your project)

💡 How It Works
User enters a stock ticker (e.g., TSLA)
Backend:
Fetches stock data + news
Sends articles to OpenAI for sentiment analysis
Frontend:
Displays price charts
Shows sentiment score + analyzed news
🔮 Future Improvements
Real-time streaming stock data
Portfolio tracking
Watchlist system
Advanced sentiment weighting
Mobile optimization
Authentication & user accounts
📌 Key Takeaways

This project demonstrates:

Full-stack development (React + Node)
API integration
AI/NLP usage in real-world applications
Data visualization and UI design
👤 Author

Imran
