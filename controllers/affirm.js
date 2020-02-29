const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios');

// GET /affirm shows a random affirmation (or "no affirmations yet")
    router.get('/', (req, res) => {
        res.send('this page will show a random affirmation or a message that says there are no affirmations yet')
    });

// GET /affirm/index shows all affirmations
    router.get('/index', (req, res) => {
        res.send('this page shows all of your positive affirmations')
    });

// GET /affirm/new shows a form to make a new affirmation
    router.get('/new', (req, res) => {
        res.send("this page shows a form to create a positive affirmation")
    });

// POST /affirm (create) updates selfAffirm db with new affirmation

// GET /affirm/:id (show) shows a specific message
    router.get('/:id', (req, res) => {
        res.send("this page shows a specific affirmation")
    });

// GET /affirm/edit/:id (edit) shows an edit form
    router.get('/edit/:id', (req, res) => {
        res.send("this page shows a form to edit you affirmation")
    });

// PUT /affirm/:id (update) updates specific affirm messsage
    router.put('/:id', (req, res) => {
        db.selfAffirm.create( {
            where: {
                id: req.params.id
            },
            default: {
                content: req.body.newAffirm
            }
        })
        res.redirect(`/${req.params.id}`);
    })

// DELETE /affirm/:id (destroy) deletes specific affirm message
router.delete('/:id', function(req, res) {
    console.log('made it to the beginning of delete')
        db.selfAffirm.destroy({
            where: { id: req.param.id }
        }).then(() => {
            res.redirect('/affirm/index');
        })
    });

module.exports = router;