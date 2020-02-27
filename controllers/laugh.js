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
    db.joke.findOrCreate({
        where: {
            content: req.body.jokeContent
        }
    }).spread(function(joke, created) {
        db.usersJokes.findOrCreate({
            where: { userId: req.user }
        }).spread(function(usersJokes, created) {
            joke.addUser(usersJokes).then(function(usersJokes) {
                console.log(usersJokes, "added to", joke);
            });
        });
    });
    res.redirect('/laugh');
});



// PUT /laugh  *update* user db to include joke preference with whichever radial button is selected

// GET /laugh/faves/:id show specific fave from db
router.get('/faves/:id', function(req, res) {
    res.send(`this will be a page to show a single joke`);
});

module.exports = router;