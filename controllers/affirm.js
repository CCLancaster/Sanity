const express = require('express');
const router = express.Router();
const db = require('../models');


// GET /affirm shows a random affirmation (or "no affirmations yet")
    router.get('/', (req, res) => {
        db.selfAffirm.findOne({ where: { userId: req.user.id }}).then( id => {
            if (id != null) {
                console.log(id);
                let oneAffirm = id.dataValues.id
                let affirm = id.dataValues
                console.log(oneAffirm);
                res.render('affirm/show', { selfAffirm: affirm } );
            } else {
                res.render('affirm/new');
            }});
    });

// GET /affirm/index shows all affirmations
    router.get('/index', (req, res) => {
        db.selfAffirm.findAll({ where: { userId: req.user.id}}).then( allAffirms => {
           console.log(allAffirms);
        //    let affirms = allAffirm.dataValues
            res.render('affirm/index', { selfAffirm : allAffirms })
        })
    });

// GET /affirm/new shows a form to make a new affirmation
    router.get('/new', (req, res) => {
        res.render('affirm/new');
    });

// POST /affirm (create) updates selfAffirm db with new affirmation
    router.post('/', (req, res) => {
        db.selfAffirm.create({ 
                userId: req.user.id,
                content: req.body.newAffirm 
        }).then(() => {
            res.redirect('affirm/index');
        })
    })

// GET /affirm/:id (show) shows a specific message
    router.get('/:id', (req, res) => {
        let num = req.params.id;

        db.selfAffirm.findOne({
            where: {
                id: num
            }
        }).then((oneAffirm) => {
            res.render('affirm/show', { selfAffirm: oneAffirm } )
        })
    });

// GET /affirm/edit/:id (edit) shows an edit form
    router.get('/edit/:id', (req, res) => {
        let num = req.params.id;

        db.selfAffirm.findOne({
            where: {
                id: num
            }
        }).then((oneAffirm) => {
            res.render('affirm/edit', { newAffirm: oneAffirm } )
        })
    });

// PUT /affirm/:id (update) updates specific affirm messsage
    router.put('/:id', (req, res) => {
        db.selfAffirm.update( req.body.newAffirm, {
            where: { id: req.params.id}
        }).then(() => {
            res.redirect(`/affirm/${req.params.id}`);
        })
    })

// DELETE /affirm/:id (destroy) deletes specific affirm message
router.delete('/:id', function(req, res) {
    console.log('made it to the beginning of delete')
    console.log(req.body.selfAffirm)
        db.selfAffirm.destroy({
            where: {
                content: req.body.selfAffirm
            }
        }).then(() => {
            res.redirect('/affirm/index');
        })
    });

module.exports = router;