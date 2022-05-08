const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const { networkInterfaces } = require('os');
const fs = require('fs');
const { acceptsLanguages } = require('express/lib/request');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
const router = require(__dirname + '/module.js')



// Mount the router on the app.
// app.use('/products', router);

app.get('/', router);










app.listen(3000, () => {
    console.log('Server is running on port 3000');
})