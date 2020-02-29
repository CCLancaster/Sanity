const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require('axios');

// GET /affirm/index shows all affirmations

// GET /affirm/new shows a form to make a new affirmation

// POST /affirm (create) updates selfAffirm db with new affirmation

// GET /affirm/:id (show) shows a specific message

// GET /affirm/edit/:id (edit) shows an edit form

// PUT /affirm/:id (update) updates specific affirm messsage

// DELETE /affirm/:id (destroy) deletes specific affirm message