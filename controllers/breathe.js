const express = require('express');
const router = express.Router();

// GET /breathe - shows breathe static page
router.get('/', (req, res) => {
    res.render('breathe/breathe');
})

// GET /breathe/deep - static page with gif
router.get('/deep', (req, res) => {
    res.render('breathe/deep');
})

module.exports = router;