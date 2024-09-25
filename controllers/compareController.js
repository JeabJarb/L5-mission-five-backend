const Item = require('../models/WatchlistItem');
const getCompareItems = async (req, res) => {
  try {
    const { ids } = req.body; 
    const items = await Item.find({ _id: { $in: ids } }); 
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch comparison items', error });
  }
};

module.exports = {
  getCompareItems,
};
