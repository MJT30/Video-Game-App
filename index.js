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

app.get('/edit', (req, res) => {
    res.render('games/edit')
    console.log(('editing current game'));
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
    VideoGame.findOneAndUpdate(req.body)
    .then((game) => res.redirect('/'))
    .catch(console.error)
    console.log('game updated');
})


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Connected on ${port}`)
})
































