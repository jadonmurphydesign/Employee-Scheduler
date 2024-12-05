## To Run you will need the following

1. [Node.js](https://nodejs.org/) (v14.x or newer recommended)
2. [npm](https://www.npmjs.com/) (comes with Node.js)
3. A terminal or command-line interface (CLI)

---

## Running the Backend

### Step 1: Install Dependencies

Navigate to the backend folder in your terminal:

```bash
cd /path/to/backend
```

if you are in this directory that will look like so

```bash
cd backend
```

Install the required packages:

```bash
npm install
```

### Step 2: Start the Server

Run the server:

```bash
npm start
```

The backend will start on `http://localhost:3000` by default.

---

## Available Endpoints

### Event Endpoints

- **Create an Event**

  - Endpoint: `POST /events`
  - Description: Creates a new event for an employee.

- **Add an Override**

  - Endpoint: `POST /events/:eventId/overrides`
  - Description: Adds an override to an existing event.

- **Fetch All Events**
  - Endpoint: `GET /events`
  - Description: Fetches all existing events.

---

## Using cURL to Interact with the Backend

## This should have terminal output, but I have also added console logs that should show up in the express server

### Create some Events with a Start and End Date

```bash
curl -X POST http://localhost:3000/events \
  -H "Content-Type: application/json" \
  -d '{
    "employeeId": 1,
    "startDate": "2023-03-01",
    "endDate": "2023-03-15"
  }'

curl -X POST http://localhost:3000/events \
  -H "Content-Type: application/json" \
  -d '{
    "employeeId": 2,
    "startDate": "2023-04-05",
    "endDate": "2023-04-20"
  }'

curl -X POST http://localhost:3000/events \
  -H "Content-Type: application/json" \
  -d '{
    "employeeId": 3,
    "startDate": "2023-05-10",
    "endDate": "2023-05-25"
  }'

curl -X POST http://localhost:3000/events \
  -H "Content-Type: application/json" \
  -d '{
    "employeeId": 4,
    "startDate": "2023-06-15",
    "endDate": "2023-06-30"
  }'

curl -X POST http://localhost:3000/events \
  -H "Content-Type: application/json" \
  -d '{
    "employeeId": 5,
    "startDate": "2023-07-01",
    "endDate": "2023-07-10"
  }'
```

### Create an Event with a Start Date that Runs Indefinitely

```bash
curl -X POST http://localhost:3000/events \
  -H "Content-Type: application/json" \
  -d '{
    "employeeId": 2,
    "startDate": "2023-03-01",
    "endDate": null
  }'

curl -X POST http://localhost:3000/events \
  -H "Content-Type: application/json" \
  -d '{
    "employeeId": 3,
    "startDate": "2023-04-05",
    "endDate": null
  }'

curl -X POST http://localhost:3000/events \
  -H "Content-Type: application/json" \
  -d '{
    "employeeId": 5,
    "startDate": "2023-06-15",
    "endDate": null
  }'

curl -X POST http://localhost:3000/events \
  -H "Content-Type: application/json" \
  -d '{
    "employeeId": 6,
    "startDate": "2023-07-01",
    "endDate": null
  }'
```

### Copy the ID in the curl output from any of the created events and paste accordingly for the following

### Create a Single-Day Override for an Event, Changing the Assignee

```bash
curl -X POST http://localhost:3000/overrides \
  -H "Content-Type: application/json" \
  -d '{
    "eventId": <"paste-event-id-as-a-string">,
    "overrideType": "TODAY_ONLY",
    "overrideEmployeeId": 2,
    "overrideStartDate": "2023-03-07",
    "overrideEndDate": null
  }'

```

### Create an Extended Override for an Event, Changing the Assignee

```bash
curl -X POST http://localhost:3000/overrides \
  -H "Content-Type: application/json" \
  -d '{
    "eventId": <"paste-event-id-as-a-string">,
    "overrideType": "TODAY_ONLY",
    "overrideEmployeeId": 2,
    "overrideStartDate": "2023-03-07",
    "overrideEndDate": null
  }'

```

### Fetch All Events

```bash
curl -X GET http://localhost:3000/events
```

### Fetch Events for Range

```bash
curl -X GET "http://localhost:3000/schedules/2023-03-05/6"
```

---
