const Item = require("../models/ProductListingItem");

const getProductListingItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch product listing items", error });
  }
};

module.exports = getProductListingItems;
