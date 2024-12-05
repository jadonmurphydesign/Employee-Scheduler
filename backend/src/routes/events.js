const express = require('express');
const { createEvent, getAllEvents } = require('../controllers/eventsController');

const router = express.Router();

router.post('/', createEvent);
router.get('/', getAllEvents);

module.exports = router;
