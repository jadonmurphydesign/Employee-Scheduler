const Override = require('../models/override');
const { getEvents } = require('./eventsController');

exports.createOverride = (req, res) => {
    const { eventId, overrideType, overrideEmployeeId, overrideStartDate, overrideEndDate } = req.body;
    const events = getEvents();
    const event = events.find(event => event.id === eventId);

    if (!event) {
        return res.status(404).json({ error: 'Event not found' });
    }

    const override = new Override(eventId, overrideType, overrideEmployeeId, overrideStartDate, overrideEndDate);
    event.addOverride(override);

    console.log(events);
    res.status(201).json(override);
};
