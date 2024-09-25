const mongoose = require('mongoose');

const watchlistItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  closingDate: { type: Date, required: true },
  image: { type: String, required: true },
  start_bid: { type: Number, required: true },
  current_bid: { type: Number, required: true },
  buy_now: { type: Number, required: true },
  project_details: {
    condition: { type: String, required: true },
    colour: { type: String, required: true },
    item_length: { type: Number, required: true },
    item_width: { type: Number, required: true },
    item_height: { type: Number, required: true },
    item_weight: { type: Number, required: true },
    material: { type: String, required: true },
    features: { type: String, required: true },
    manufacturer: {
      brand: { type: String, required: true },
      make: { type: String, required: true },
      model: { type: String, required: true },
    },
    year_made: { type: Number, required: true },
  },
  shipping: {
    shipping: { type: String, required: true },
    returns: { type: String, required: true },
    payment: { type: String, required: true },
  },
  description: { type: String, required: true },
});

module.exports = mongoose.model('WatchlistItem', watchlistItemSchema);
