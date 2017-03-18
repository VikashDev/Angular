'use strict';

const express = require('express');
const bodyParser = require('body-parser');


// instantiate the app
const app = express();

// using middlewares 
app.use(express.static(__dirname + '/_public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//define your routes 

app.get('/', (req, res) => {
    res.send('Welcome to my website');
});

app.get('/api/data', (req, res) => {
    res.send(data);
});



app.get('/register/address/:add/name/:name', (req, res) => {
    let data = {
        name : req.params.add,
        pass : req.params.name
    };
    res.sendFile(__dirname + '/_public/register.html');
    console.log(data);
});


app.post('/register', (req, res) => {
    console.log(req);
    let data = {
        name : req.name,
        email : req.email,
        pass : req.pass
    };
    res.send(data);
});

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    // get data from db for user with this id
    res.send('user id is ' + id);
})

app.get('/personal/:pass', (req, res) => {
    let pass = req.params.pass;

    if (pass === 'admin') {
        res.status(200).send({msg : 'welcome dear malik'});
    }
    else {
        res.status(400).send({msg : 'you are not my malik'});
    }

});

app.listen(5000);

