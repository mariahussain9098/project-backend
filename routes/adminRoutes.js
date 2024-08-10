const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../controllers/adminController');

// Route for admin login
router.post('/login', loginAdmin);

module.exports = router;
