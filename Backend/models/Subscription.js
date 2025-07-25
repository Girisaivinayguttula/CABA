const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);