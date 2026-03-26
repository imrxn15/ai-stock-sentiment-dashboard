require("dotenv").config();

console.log("1. Starting server...");

const express = require("express");
console.log("2. Express loaded");

const cors = require("cors");
console.log("3. Cors loaded");

const app = express();
console.log("4. App created");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = 5000;

console.log("5. About to listen...");

app.listen(PORT, () => {
  console.log(`6. Server running on port ${PORT}`);
});

const stockRoutes = require("./routes/stock");
app.use("/api/stock", stockRoutes);