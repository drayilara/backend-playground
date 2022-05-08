const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const { networkInterfaces } = require('os');
const fs = require('fs').promises;
app.use(bodyParser.urlencoded({ extended: false }))
const exported = require(__dirname + '/module.js')

let logOriginalUrl = (req,res,next) => {
    console.log(`Original Url: ${req.originalUrl}`)
    next();
}

let logMethod = (req,res,next) => {
    console.log(`Request method: ${req.method}`);
    next();
}

app.use([logOriginalUrl, logMethod], (req,res,next) => {
    console.log(`Logged user info`);
    next();
})

app.get('/', (req,res) => {
    res.send('I logged your info');
})

app.post('/user', (req,res,next) => {
    console.log('I was triggered by a series,now i will fire my own series')
    next();
}, (req,res) => {
    res.send('I am the second in the post series,I end this stuff now')
})

app.post('/', (req,res) => {
    res.send('That user was authentic,now I have to go to work')
})














app.listen(3000, () => {
    console.log('Server is running on port 3000');
})