const express = require('express');
const router = express.Router();
const Listing = require('../models/listing.js');
const {isLoggedIn} = require("../middleware.js");
const { index, createListing } = require("../centroller/listing.js");
const { renderNewForm } = require("../centroller/listing.js");
const { showListings } = require("../centroller/listing.js");
const { deleteListing } = require("../centroller/listing.js");
const { updateListing } = require("../centroller/listing.js");
const { editListing } = require("../centroller/listing.js");
const { createListings } = require("../centroller/listing.js");

const { upload } = require("../middlewares/multer.js");


//new route
router.get('/new',isLoggedIn, renderNewForm);

//create route 
router.post("/", isLoggedIn, upload.single("image"), createListings);

//edit route
router.get("/:id/edit",isLoggedIn, editListing);

//update route
router.put("/:id",isLoggedIn, updateListing);

//index route
router.get('/', index) ;

//show routes
router.get('/:id',showListings)

//delete route
router.delete('/:id',isLoggedIn, deleteListing)


module.exports = router;
