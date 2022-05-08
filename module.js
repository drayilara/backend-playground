const express = require('express');

const router = express.Router();

router
    .route('')
    .get((req,res) => {
    res.send('Hit the get route of products');
})
    .post((req,res) => {
    res.send('Hit the post route of products');
});

module.exports = router