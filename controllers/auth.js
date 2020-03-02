const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../config/ppConfig');

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.post('/signup', (req, res) => {
  db.user.findOrCreate({
    where: {
      email: req.body.email
    }, defaults: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password
    }
  }).then(([user, created]) => {
    if (created) {
      console.log('user created');
      passport.authenticate('local', {
        successRedirect: '/',
        successFlash: 'thank you for joining us'
      })(req, res);
      // res.redirect('/');
    } else {
      console.log('email already exists');
      req.flash('error', 'Email already exists');
      res.redirect('/auth/signup');
    }
  }).catch(err => {
    console.log('🤯 Error occured finding or creating user');
    console.log(err);
    req.flash('error', err.message);
    res.redirect('/auth/signup')
  })

});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  successFlash: 'welcome',
  failureFlash: 'Invalid email or password'
}));

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'wishing you well');
  res.redirect('/');
});

module.exports = router;
