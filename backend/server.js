const express = require('express')
const fs = require("fs");

const app = express()

port = 3000

let characters;

const dataChar = fs.readFileSync("./data/characters.json")
characters = JSON.parse(dataChar)

const dataWeapon = fs.readFileSync("./data/weapons.json")
weapons = JSON.parse(dataWeapon)

app.get('/getChars', (req, res) => {
    res.send(characters)
})

app.get('/getWeapons', (req, res) => {
    res.send(weapons)
})

app.listen(port, () => {
    console.log('Server running at http://localhost:' + port)
})