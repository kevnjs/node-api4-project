const express = require('express');
const router = express.Router();
const data = require('./mock-data')
const nanoid = require('nanoid')

router.get('/', (req, res) => {
    res.send("WELCOME")
})

router.get('/data', (req, res) => {
    res.send(data)
})

router.get('/data/:id', (req, res) => {
    const show = data.filter(d => d.id == req.params.id)
    res.send(show)
})

router.put('/data', (req, res) => {
    data.push({
        id: nanoid.nanoid(),
        name: req.body.name,
        age: req.body.age,
        level: req.body.level,
        bio: req.body.bio
    })
    res.send(req.body)
})

module.exports = router;

