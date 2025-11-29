const mongooose = require('mongoose');
const Schema = mongooose.Schema;
const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image : {
         filename: String,
         url: String

    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    reviews : [
        {
            type :Schema.Types.ObjectId,
            ref: "Review",
        }
    ]
});

const Listing = mongooose.model('Listing', listingSchema);
module.exports = Listing;