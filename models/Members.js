const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MembersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: {
        type: Buffer
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Members = mongoose.model("members", MembersSchema);
