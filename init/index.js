require('dotenv').config();
console.log(process.env.MONGO_URL)
const connectDB = require('../db/index.js');
const mongoose = require('mongoose');
const initdata = require('./data.js');
const Listing = require('../models/listing.js');

async function seedDatabase() {
  try {
    await Listing.deleteMany({});
    const inserted = await Listing.insertMany(initdata.data);
    console.log(` Seeded ${inserted.length} listings successfully`);
  } catch (error) {
    console.error(' Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log(' Disconnected from MongoDB');
  }
}

connectDB()
  .then(seedDatabase)
  .catch(err => console.error(' Connection error:', err));
