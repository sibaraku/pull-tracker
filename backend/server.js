const express = require('express')
const fs = require("fs");

const app = express()

port = 3000

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


app.get('/getChars', (req, res) => {
    res.send(characters)
})

app.get('/getWeapons', (req, res) => {
    res.send(weapons)
})

app.listen(port, () => {
    console.log('Server running at http://localhost:' + port)
})