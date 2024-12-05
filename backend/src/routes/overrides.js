const express = require('express');
const { createOverride } = require('../controllers/overridesController');

const router = express.Router();

router.post('/', createOverride);

module.exports = router;
