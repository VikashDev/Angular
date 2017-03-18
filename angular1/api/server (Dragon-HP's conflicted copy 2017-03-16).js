'use strict';

const express = require('express');
const bodyParser = require('body-parser');

let data = {
    name : "vikash",
    lname : "kumar"
}

const app = express();

app.use(express.static(__dirname + '/_public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/_public/index.html');
});

// app.get('/feeds' ,(req, res) => {
//         res.json({data});
// });

// app.post('/register' , (req, res) => {    
//     res.json({data : req.body.email});
// });


app.listen(2020);