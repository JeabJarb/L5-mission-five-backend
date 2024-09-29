const Product = require("../models/productListingItem");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch product listing items", error });
  }
};

const getProductById = async (req, res) => {
  try {
    // Find the user who has the product listing
    const user = await Product.findOne({
      "user_product_listings.listing_id": req.params.id,
    });

    // If user exists, search for the product within their listings
    if (user) {
      const product = user.user_product_listings.find(
        (listing) => listing.listing_id === parseInt(req.params.id)
      );
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Product listing item not found" });
      }
    } else {
      res.status(404).json({ message: "Product listing item not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch product listing item", error });
  }
};

const updateBid = async (req, res) => {
  try {
    const { id } = req.params; // This is the listing_id
    const { current_bid } = req.body;

    // Validate the current_bid
    if (typeof current_bid !== "number" || current_bid <= 0) {
      return res
        .status(400)
        .json({
          message: "Invalid current_bid. It must be a positive number.",
        });
    }

    // Find the user who has the product listing with the matching listing_id
    const user = await Product.findOne({
      "user_product_listings.listing_id": parseInt(id),
    });

    // If the user exists and product is found
    if (user) {
      // Find the specific product within the user's product listings
      const product = user.user_product_listings.find(
        (listing) => listing.listing_id === parseInt(id)
      );

      // If the product is found, update the current_bid
      if (product) {
        product.current_bid = current_bid;

        // Save the updated user document to apply the changes
        await user.save();

        return res.status(200).json(product); // Return the updated product
      } else {
        return res
          .status(404)
          .json({ message: "Product listing item not found" });
      }
    } else {
      return res
        .status(404)
        .json({ message: "Product listing item not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error.", error });
  }
};

module.exports = { getProducts, getProductById, updateBid };
