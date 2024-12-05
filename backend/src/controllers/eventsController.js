const Event = require('../models/event');

const events = [];

exports.createEvent = (req, res) => {
    const { employeeId, startDate, endDate } = req.body;
    const event = new Event(employeeId, startDate, endDate);
    events.push(event);
    console.log(event);
    res.status(201).json(event);
};

exports.getAllEvents = (req, res) => {
    res.status(200).json(events);
};

exports.getEvents = () => events;
