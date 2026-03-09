const express = require('express')
const fs = require("fs");
const cors = require('cors');
const app = express()

port = 3000

app.use(cors())

let charactersGenshin = []
let weaponsGenshin = []

let charactersHSR = []
let weaponsHSR = [];

// Genshin
const dataCharGenshin = fs.readFileSync("./data/charactersGenshin.json")
charactersGenshin = JSON.parse(dataCharGenshin)

const dataWeaponGenshin = fs.readFileSync("./data/weaponsGenshin.json")
weaponsGenshin = JSON.parse(dataWeaponGenshin)

//HSR
const dataCharHSR = fs.readFileSync("./data/charactersHSR.json")
charactersHSR = JSON.parse(dataCharHSR)

const dataWeaponHSR = fs.readFileSync("./data/weaponsHSR.json")
weaponsHSR = JSON.parse(dataWeaponHSR)


app.get('/genshin/chars', (req, res) => {
    res.send(charactersGenshin)
})

app.get('/genshin/weapons', (req, res) => {
    res.send(weaponsGenshin)
})

app.get('/hsr/chars', (req, res) => {
    res.send(charactersHSR)
})

app.get('/hsr/weapons', (req, res) => {
    res.send(weaponsHSR)
})

app.listen(port, () => {
    console.log('Server running at http://localhost:' + port)
})