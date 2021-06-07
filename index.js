const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('HHi')
})

app.listen(3000)