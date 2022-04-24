const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const gameSchema = new Schema(
    {
        name: {type: String, required: true},
        image: {type: String, required: true},
        video: {type: String, required: true},
        rating: {type: Number, max: 5},
        review: {type: String, required: true},
        
        
    }
)

const VideoGame = mongoose.model("VideoGame", gameSchema)

module.exports = VideoGame