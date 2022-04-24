const express = require('express')
const res = require('express/lib/response')
const mongoose = require('mongoose')
const gamesControllers = require('./controllers/games')
const methodOverride = require('method-override')
const app = express()
app.use(express.static('public'))
// const db = mongoose.connection
// const router = express.Router()

const videoGameSeed = require('./db/seed.json')
require('hbs')

//config
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'hbs')

app.use(methodOverride('_method'))
// app.use('/videogames', gamesControllers)
const VideoGame = require('./models/seed')


//The Home page
app.get('/', (req, res) => {
    VideoGame.find({})
        .then((game) => res.render('games/index', {game}))
        .catch(console.error)
})

//Takes you to the page to where you can add a new game to collection. Via the POST route on line 46.
app.get('/new', (req, res) => {
    res.render('games/new')
    console.log('Adding game');
})

//Finds a game by it's Id
app.get('/:id/', (req, res) => {
    VideoGame.findById(req.params.id)
    .then((game) => {
    console.log(game)
    res.render('games/view',{game})})
    .catch(console.error)
    console.log("I'm working");
})

//Can only send one res to client at a time
app.post('/', (req,res) => {
    console.log(req.body);
    VideoGame.create(req.body)
    res.redirect('/')
 console.log("Game added");
})

//Deletes game from collection. 
app.delete('/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    VideoGame.findByIdAndDelete(id)
    .then((d) => {
        console.log(d);
    res.redirect('/')
        })
        .catch(console.error)
        console.log('game deleted');
})

//Up dates data
app.put('/:id', (req, res) => {
    const id = req.params.id
    console.log(id);
    VideoGame.findByIdAndUpdate({_id: id},
        {
            name: req.body.name,
            image: req.body.image,
            video: req.body.video,
            rating: req.body.rating,
            review: req.body.review
        },
        {new: true}
        )
    .then((game) => {
        res.render('games/edit',game)
    })
    .catch(console.error)
})


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Connected on ${port}`)
})


























// const mongoURI = "mongodb+srv://MylesT913:test@cluster0.yniju.mongodb.net/videogameapp?retryWrites=true&w=majority"
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true}, () => {
//     console.log('Connected to my database')
// })




// db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
// db.on('connected', () => console.log('mongo connected: All systems go'))
// db.on('disconnected', () => console.log('mongo disconnected'))



// app.get('/', (req, res) => {
//     VideoGame.find({}).then((game) => {
//         res.render('games/index', {game})
//     })
// })


// app.get('/new', (req, res) => {
//     res.render('games/new')
//     console.log('Adding game');
// })


// app.post('/', (req,res) => {
//     VideoGame.create(req.body)
//         .then((game) => {
//             res.redirect('/')
//             console.log('Game added');
//         })
// })

// app.get('/:id', (req, res) => {
//     VideoGame.findById(req.params.id)
//         .then((game) => {
//             res.render('games/view', {game})
//         })
// })

