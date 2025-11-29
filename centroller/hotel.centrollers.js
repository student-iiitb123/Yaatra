const Listing = require('../models/listing.js');

 const searchHotels = async (req , res) => {

    try {
    const { country } = req.query;

    if (!country) {
      return res.status(400).json({ message: "Country is required" });
    }

    const listing = await Listing.find({
      country: { $regex: new RegExp(country, "i") },
    });

    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
  res.render("listings/searchResults", { hotels });
}

module.exports = searchHotels;