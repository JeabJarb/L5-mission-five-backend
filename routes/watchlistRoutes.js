const express = require('express');
const WatchlistItem = require('../models/WatchlistItem'); 
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const items = await WatchlistItem.find();
        res.json(items);
    } catch (error) {
        console.error("Error fetching watchlist items:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
