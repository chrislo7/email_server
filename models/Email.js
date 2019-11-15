const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MessageSchema = new Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    body_text: {
        type: String,
        required: true
    },
    body_html: {
        type: String,
        required: true
    }
});

module.exports = Item = mongoose.model('item', MessageSchema);