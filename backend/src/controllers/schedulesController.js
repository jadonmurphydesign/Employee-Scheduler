const { getEvents } = require('./eventsController');

exports.getSchedule = (req, res) => {
    const { startDate, num_days } = req.params;
    const start = new Date(startDate);
    const days = parseInt(num_days, 10);

    const schedule = [];
    const events = getEvents();

    for (let i = 0; i < days; i++) {
        const currentDate = new Date(start);
        currentDate.setDate(start.getDate() + i);
        const dailySchedule = events
            .filter(event => event.activeDates(currentDate))
            .map(event => ({
                eventId: event.id,
                date: currentDate.toISOString().split('T')[0],
                employeeId: event.getAssignedEmployee(currentDate),
            }));

        schedule.push({ date: currentDate.toISOString().split('T')[0], events: dailySchedule });
    }

    console.log(events, schedule)

    res.status(200).json(schedule);
};
