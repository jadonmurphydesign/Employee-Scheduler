const express = require('express');
const { getSchedule } = require('../controllers/schedulesController');

const router = express.Router();

router.get('/:startDate/:num_days', getSchedule);

module.exports = router;
