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














// const mongoURI = "mongodb+srv://MylesT913:test@cluster0.yniju.mongodb.net/videogameapp?retryWrites=true&w=majority"
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true}, () => {
//     console.log('Connected to my database')
// })