const express = require("express");
const router = express.Router({mergeParams: true});
const Review = require('../models/reviews.js');
const Listing = require('../models/listing.js');
const { reviewHandle} = require("../centroller/review.js");






router.post("/", reviewHandle);

module.exports= router;