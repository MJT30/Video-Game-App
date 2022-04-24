const mongoose = require('mongoose')

const mongoURI =
    process.env.NODE_ENV === 'proudction'
    ? process.env.DB_URL: 'mongodb+srv://MylesT913:test@cluster0.yniju.mongodb.net/videogameapp?retryWrites=true&w=majority'




mongoose.connect(mongoURI)
    .then(instance => console.log(`Connected to: ${instance.connections[0].name}`))
    .catch(error => {
        ;console.log(`failed conn:`, error)
    })

module.exports = mongoose 
