const express = require('express')
// const { model } = require('../db/connection')
const router = express.Router()

const VideoGame = require('../models/seed')

// router.get('/', (req, res) => {
//     VideoGame.find({})
//         .then((game) => res.render('games/index', {game}))
//         .catch(console.error)
// })

// router.get('/new', (req, res) => {
//     res.render('games/new')
//     console.log('Adding game');
// })

// router.get('/:id', (req, res) => {
//     VideoGame.findById(req.params.id)
//         .then((game) => {
//             res.render('games/view', {game})
//         })
// })

// router.post('/', (req,res) => {
//     VideoGame.create(req.body)
//         .then((game) => {
//             res.redirect('/')
//             console.log('Game added');
//         })
// })



module.exports = router