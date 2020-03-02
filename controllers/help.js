const express = require('express');
const router = express.Router();

// GET /help - shows help static page
router.get('/', (req, res) => {
    res.render('help');
})

module.exports = router;