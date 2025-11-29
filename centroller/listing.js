const Listing = require("../models/listing.js");



module.exports.index = async(req,res) =>{
const AllListings =await Listing.find({});
res.render("listings/index.ejs",{ AllListings })
};


module.exports.renderNewForm =(req, res) => {
  res.render('listings/new.ejs');
};


module.exports.showListings = async(req,res) => {
  let {id} = req.params;
 const listing = await Listing.findById(id).populate("reviews");
res.render("listings/show.ejs",{listing});
    
};


module.exports.deleteListing =async (req, res) => {
  const { id } = req.params;
await Listing.findByIdAndDelete(id);
res.redirect('/listings');
};


module.exports.updateListing= async(req,res) => {
let { id } = req.params
id = id.trim();
await Listing.findByIdAndUpdate(id,{...req.body.listing});
res.redirect('/listings')
};


module.exports.editListing = async (req,res) =>{
 let {id} = req.params;
 const listing = await Listing.findById(id);
res.render("listings/Edit.ejs" ,{ listing } );
}


module.exports.createListings = async (req, res) => {
  try {
    const { listing } = req.body;

    //  If no file uploaded
    if (!req.file) {
      return res.status(400).send("Image is required");
    }

    //  Get uploaded image path
    const imagePath = req.file.path; // e.g. "uploads/1710151200-123456789.jpg"

    //  Create new listing with image
    const newListing = new Listing({
      ...listing,
      image: imagePath,
    });

    await newListing.save();

    res.redirect("/listings");
  } catch (err) {
    console.error("Error creating listing:", err);
    res.status(500).send("Internal server error");
  }
};
