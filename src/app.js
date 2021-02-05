const express = require('express');
const {userModel} = require('./model/model');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    // start writing your API
    res.sendStatus("ok");
})


module.exports = app;