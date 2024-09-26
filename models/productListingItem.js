const mongoose = require("mongoose");

const productListingSchema = new mongoose.Schema({
  username: String,
  user_avatar: [String],
  user_location: {
    area: String,
    city: String,
  },
  user_signup: String,
  user_feedback: {
    review: String,
    feedback_rating: String,
  },
  user_product_listings: [
    {
      name: String,
      listing_id: Number,
      image: [String],
      start_bid: Number,
      current_bid: Number,
      buy_now: Number,
      closingDate: String,
      product_details: {
        condition: String,
        colour: String,
        item_length: Number,
        item_width: Number,
        item_height: Number,
        item_weight: Number,
        material: String,
        features: String,
        manufacturer: {
          brand: String,
          make: String,
          model: String,
        },
        year_made: Number,
      },
      shipping: {
        shipping: String,
        returns: String,
        payment: String,
      },
      description: String,
    },
  ],
});

const ProductListing = mongoose.model("ProductListing", productListingSchema);

module.exports = ProductListing;
