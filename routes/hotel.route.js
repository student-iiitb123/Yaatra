const express = require("express")
const searchHotels = require('../centroller/hotel.centrollers.js')

const router = express.Router();

router.get("/search", searchHotels);

module.exports = router;