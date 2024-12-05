const express = require('express');
const bodyParser = require('body-parser');
const eventsRouter = require('./routes/events');
const overridesRouter = require('./routes/overrides');
const schedulesRouter = require('./routes/schedules');

const app = express();

app.use(bodyParser.json());

app.use('/events', eventsRouter);
app.use('/overrides', overridesRouter);
app.use('/schedules', schedulesRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
