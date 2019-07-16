const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ImagesSchema = new Schema({
    image: {
        type: Buffer
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Images = mongoose.model("images", ImagesSchema);
