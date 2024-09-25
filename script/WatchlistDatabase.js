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
      title: "Vintage Velvet Couch", 
      location: "Living Room", 
      closingDate: new Date('2025-12-31'), 
      image: "/Images/GreenSofa.jpg",
      start_bid: 20,
      current_bid: 25,
      buy_now: 50,
      project_details: {
        condition: "New",
        colour: "Green",
        item_length: 150,
        item_width: 200,
        item_height: 100,
        item_weight: 50,
        material: "Velvet",
        features: "3-Seater, Stylish",
        manufacturer: {
          brand: "Sofa4All",
          make: "Sofa",
          model: "DA2020",
        },
        year_made: 2020,
      },
      shipping: {
        shipping: "Standard Shipping (5-7 days)",
        returns: "Returns accepted within 14 days",
        payment: "Credit Card, PayPal",
      },
      description: "Stylish Green Sofa perfect for any living room.",
    },
    {
      title: "Modular Sofa / 3-seater", 
      location: "Living Room", 
      closingDate: new Date('2024-10-15'), 
      image: "/Images/ModularSofa.jpg",
      start_bid: 200,
      current_bid: 500,
      buy_now: 850,
      project_details: {
        condition: "New",
        colour: "Grey",
        item_length: 90,
        item_width: 220,
        item_height: 80,
        item_weight: 45,
        material: "Fabric",
        features: "3-seater, Modular",
        manufacturer: {
          brand: "Freedom Furniture",
          make: "Mario",
          model: "Bellini",
        },
        year_made: 2010,
      },
      shipping: {
        shipping: "Standard Shipping (5-7 days)",
        returns: "Returns accepted within 14 days",
        payment: "Credit Card, PayPal",
      },
      description: "Great modular sofa to go along with any style of living room",
    },
  ];

  await WatchlistItem.insertMany(items);
  console.log("Sample data inserted!");
  mongoose.connection.close();
}).catch((err) => {
  console.error("Error connecting to MongoDB", err);
});
