# MERN Chat Application

A real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Introduction

This MERN Chat Application allows users to communicate with each other in real-time. Users can create accounts, log in, and join chat rooms to send and receive messages instantly.

## Features

- Real-time messaging with WebSockets
- User authentication and authorization
- Responsive UI design
- Emoji support
- Message timestamps
- file Attchments

## Installation

To run this application locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB

### Backend

1. Clone the repository:
    ```sh
    git clone https://github.com/sahilpokharkar/chat-app.git
    cd chat-app
    ```

2. Install dependencies:
    ```sh
    cd api
    npm install
    ```

3. Create a `.env` file in the `server` directory with the following environment variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

4. Start the server:
    ```sh
    npm start
    ```

### Frontend

1. Install dependencies:
    ```sh
    cd ../client
    npm install
    ```

2. Start the development server:
    ```sh
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new account or log in with an existing account.
3. Join or create a chat room and start messaging.

## Technologies Used

- **Frontend:**
  - React
  - Redux
  - Axios
  - Material-UI / Tailwind CSS

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - Websocket Server
  - JWT (JSON Web Tokens)
  - bcrypt

