const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EventsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    details: {
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

module.exports = Events = mongoose.model('events', EventsSchema);