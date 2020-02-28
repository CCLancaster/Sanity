const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios');

// GET /laugh 
router.get('/', function(req, res) {
    console.log(req.query.jokeType);
        //if dadzjokes
    if (req.query.jokeType === "chuck") {
        //if chuck jokes
        db.user.findOne({
            where: {
                id: req.user.id
            }
        }).then(function(user) {
            user.update({
                jokeSource: req.query.jokeType
            })
        })
        .then(function (req, res) {
            console.log("jokeSource has been added")
        })

        var chuckUrl = 'http://api.icndb.com/jokes/random';
        // Use request to call the API
        axios.get(chuckUrl).then( function(apiResponse) {
            console.log(apiResponse.data);
            var joke = apiResponse.data.value;
            // res.render('laugh/laugh');
            res.render('laugh/laugh', { joke });
        })
        .catch(function(err) {console.log(err);})
        .finally(function() {
            console.log('made it to the end of chuck successfully')
        })
    } else {
        var dadzUrl = 'https://icanhazdadjoke.com/';
        // Use request to call the API
        axios.get(dadzUrl, {headers:{
            "Accept": "application/json"
        }}).then( function(apiResponse) {
        var joke = apiResponse.data;
        console.log("---------------")
        console.log(apiResponse.data)
        // res.render('laugh/laugh');
        res.render('laugh/laugh', { joke });
        })
        .catch(function(err) {console.log(err);})
    .finally(function() {
        console.log('made it to the end of dadz successfully')
    })
    }
})


// GET /laugh/faves show all faves from db
router.get('/faves', function(req,res) {
    res.send("this will be a page that will show your favorite jokes");
});

// POST /laugh/faves add fave joke to db
router.post('/', function(req,res) {
    console.log(req.body.jokeContent);
    db.user.findOne({
        where: {
            id: req.user.id
        }
    }).then( function(user) {
        db.joke.findOrCreate({ 
            where: { content: req.body.jokeContent }
        }).spread(function(joke, created) {
            user.addJoke(joke).then(function(joke) {
                console.log(joke, " added to", user);
                res.redirect('/laugh');
            })
        })
    })
});



// POST /laugh  create joke preference entry in user db to include whichever radial button is selected
router.post('/', function(req, res) {
    db.user.create({
            jokeSource: req.body.jokeType
    }).then(function (req, res) {
        console.log(jokeSource, "has been added to", user)
        res.redirect('/laugh');
    })
    .catch(function(error) {
        console.log(error)
      })
});

// GET /laugh/faves/:id show specific fave from db
router.get('/faves/:id', function(req, res) {
    res.send(`this will be a page to show a single joke`);
});

module.exports = router;