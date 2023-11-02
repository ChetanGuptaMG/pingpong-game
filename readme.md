# Multiplayer Pong Game

**Live Demo**: Live Project on Google Cloud https://pingpong-agvfzimtiq-em.a.run.app (note: reqire two clien or tabs to start the game)

## Overview

This is a simple multiplayer Pong game built with HTML5 Canvas, Node.js, Express, and Socket.IO. It showcases advanced WebSockets, rooms, and namespaces usage. Players can compete with each other in real-time by controlling paddles to bounce the ball and score points.

## Features

- Real-time multiplayer gameplay using WebSockets.
- Two-player mode with one player acting as the referee.
- Dynamic ball movement and collision detection.
- Score tracking for both players.
- Advanced usage of rooms and namespaces.
- A clean and intuitive user interface.

## Installation and Usage

### Prerequisites

- Node.js and npm installed on your system.

### Installation

1. Clone the repository:

```bash
git clone 
cd multiplayer-pong

npm install
npm start
```

The server will be running at http://localhost:8000.

Access the game in your web browser by visiting http://localhost:8000 or use the provided live demo link.

Play the game by moving the paddles with your mouse.
## WebSockets, Rooms, and Namespaces
This game leverages Socket.IO for real-time communication, showcasing the power of WebSockets. Players are matched into the same room to compete with each other, offering a seamless multiplayer experience. Namespaces allow you to create separate game instances on the server, making the project scalable and organized.

## Configuration
You can customize various game settings in the code, including canvas dimensions, paddle sizes, ball properties, and more. Refer to the client-side and server-side code for details.



