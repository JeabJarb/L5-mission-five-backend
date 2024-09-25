const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const auctionRoutes = require('./routes/auctionRoutes');
const watchlistRoutes = require('./routes/watchlistRoutes');
const compareRoutes = require('./routes/compareRoutes'); 

const app = express();

app.use(cors());

app.use(express.json());

// Middleware to serve static files
app.use('/public', express.static('public'));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.get("/", (req, res) => {
  res.send("The backend is running!");
});

app.use("/api/auctions", auctionRoutes);
app.use("/api/watchlist", watchlistRoutes);
app.use("/api/compare", compareRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
