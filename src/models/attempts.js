const mongoose = require('mongoose');
const { Schema } = mongoose;

const attemptSchema = new Schema({
    userName: { type: String, required: true},
    points: { type: Number, required: true}
})

module.exports = mongoose.model('attempt', attemptSchema);