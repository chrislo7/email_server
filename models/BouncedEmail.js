const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BouncedEmailSchema = new Schema({
    email_address: {
        type: String,
        required: true
    }
});

module.exports = BouncedEmail = mongoose.model('bouncedEmail', BouncedEmailSchema);