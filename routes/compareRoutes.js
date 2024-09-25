const express = require('express');
const router = express.Router();
const Item = require('../models/WatchlistItem'); 

router.get('/', async (req, res) => {
  try {
    const { itemIds } = req.query; 

    if (!itemIds) {
      return res.status(400).json({ message: 'Item IDs are required' });
    }

    const idsArray = Array.isArray(itemIds) ? itemIds : itemIds.split(',');

    const items = await Item.find({ _id: { $in: idsArray } });

    if (items.length === 0) {
      return res.status(404).json({ message: 'No items found for the provided IDs' });
    }

    res.json(items);
  } catch (err) {
    console.error('Error fetching compare items:', err);
    res.status(500).json({ message: 'Error fetching items' });
  }
});

module.exports = router;

