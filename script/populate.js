const mongoose = require('mongoose');
const WatchlistItem = require('../models/WatchlistItem'); 
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("Connected to MongoDB");

  const items = [
    {
      title: "Vintage Wooden Chair", 
      location: "Living Room", 
      closingDate: new Date('2024-12-31'), 
      image: "/Images/VintageChair.jpg",
      start_bid: 50,
      current_bid: 75,
      buy_now: 150,
      project_details: {
        condition: "Used",
        colour: "Brown",
        item_length: 45,
        item_width: 40,
        item_height: 85,
        item_weight: 10,
        material: "Wood",
        features: "Handcrafted, Lightweight",
        manufacturer: {
          brand: "Antique Designs",
          make: "Classic Chair",
          model: "AD200",
        },
        year_made: 1950,
      },
      shipping: {
        shipping: "Standard Shipping (5-7 days)",
        returns: "Returns accepted within 14 days",
        payment: "Credit Card, PayPal",
      },
      description: "A beautiful vintage wooden chair, handcrafted with intricate designs.",
    },
    {
      title: "Modern Sofa Set", 
      location: "Living Room", 
      closingDate: new Date('2024-12-31'), 
      image: "/Images/ModernSofa.jpg",
      start_bid: 300,
      current_bid: 350,
      buy_now: 600,
      project_details: {
        condition: "New",
        colour: "Gray",
        item_length: 200,
        item_width: 90,
        item_height: 85,
        item_weight: 50,
        material: "Fabric, Wood",
        features: "Comfortable, Durable",
        manufacturer: {
          brand: "Home Comfort",
          make: "Luxury Sofa",
          model: "HC2021",
        },
        year_made: 2021,
      },
      shipping: {
        shipping: "Standard Shipping (5-7 days)",
        returns: "Returns accepted within 14 days",
        payment: "Credit Card, PayPal",
      },
      description: "A modern sofa set that combines comfort and style. Perfect for any living room.",
    },
    {
      title: "Ceramic Vase", 
      location: "Dining Room", 
      closingDate: new Date('2024-12-31'), 
      image: "/Images/CeramicVase.jpg",
      start_bid: 20,
      current_bid: 25,
      buy_now: 50,
      project_details: {
        condition: "New",
        colour: "White",
        item_length: 15,
        item_width: 15,
        item_height: 30,
        item_weight: 2,
        material: "Ceramic",
        features: "Hand-painted, Elegant",
        manufacturer: {
          brand: "Decor Art",
          make: "Classic Vase",
          model: "DA2020",
        },
        year_made: 2020,
      },
      shipping: {
        shipping: "Standard Shipping (5-7 days)",
        returns: "Returns accepted within 14 days",
        payment: "Credit Card, PayPal",
      },
      description: "An elegant ceramic vase, hand-painted with intricate designs. Perfect for home decor.",
    },
    {
      title: "Dining Table Set", 
      location: "Dining Room", 
      closingDate: new Date('2024-12-31'), 
      image: "/Images/DiningTable.jpg",
      start_bid: 200,
      current_bid: 250,
      buy_now: 500,
      project_details: {
        condition: "Used",
        colour: "Brown",
        item_length: 150,
        item_width: 90,
        item_height: 75,
        item_weight: 40,
        material: "Wood",
        features: "Expandable, Durable",
        manufacturer: {
          brand: "Home Comfort",
          make: "Dining Set",
          model: "HC2021",
        },
        year_made: 2021,
      },
      shipping: {
        shipping: "Standard Shipping (5-7 days)",
        returns: "Returns accepted within 14 days",
        payment: "Credit Card, PayPal",
      },
      description: "A durable dining table set, perfect for family gatherings and dinners.",
    },
  ];

  await WatchlistItem.insertMany(items);
  console.log("Sample data inserted!");
  mongoose.connection.close();
}).catch((err) => {
  console.error("Error connecting to MongoDB", err);
});
