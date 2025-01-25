# Match Score Tracker

A simple web application to track match results with a MongoDB backend.

## Features
- Add players and track match results.
- Calculate win rate and net wins dynamically.
- Save and load data from MongoDB.

## Setup

### Prerequisites
- Node.js and npm
- MongoDB

### Steps
1. Clone the repository.
2. Navigate to the `backend` folder and run `npm install`.
3. Start MongoDB locally.
4. Initialize players by sending a POST request to `/initialize` using Postman or curl.
5. Run the backend server: `npm start`.
6. Open `frontend/index.html` in a browser.

## API Endpoints
- `POST /initialize`: Initialize player data.
- `GET /players`: Fetch all players.
- `POST /updateMatch`: Update a player's match result.
