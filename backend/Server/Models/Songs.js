const mongoose = require('mongoose');

const songsSchema = new mongoose.Schema({
    title: String,
    path: String,
    photo: String,
    artist: String,
    uploaded: Date,
    users: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users"
    }]
  
}, { timestamps: true })


module.exports = mongoose.model('Songs', songsSchema)