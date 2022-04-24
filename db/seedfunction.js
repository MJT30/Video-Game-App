// const mongoose= require('mongoose')
const VideoGame = require('../models/seed')
const videoGameSeed = require('./seed.json')
// const db = mongoose.connection

VideoGame.deleteMany({}) .then(() => {
    return VideoGame.insertMany(videoGameSeed)
}) 
    .then(console.log)
    .catch(console.log(console.error))
    .finally(() => {
    process.exit()
})
console.log(videoGameSeed)












