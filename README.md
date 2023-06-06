# Nest Vue Crud App

## Prerequisites

- Node.js (version 14.X.X or higher)
- Docker (version 14.X.X or higher)

## Installation

1. Clone the repository: `git clone git@github.com:fara0ndataart/nest-vue-crud.git`
2. Navigate to the project directory: `cd nest-vue-crud`
3. Install dependencies for the API:
    - Navigate to the API folder: `cd api`
    - Install API dependencies: `npm install`
4. Install dependencies for the client:
    - Navigate to the client folder: `cd ../client`
    - Install client dependencies: `npm install`

## Deployment

### Deploying the API

1. Navigate to the API folder: `cd api`
2. Build the API: `npm run build`
3. Start the API: `npm start` or `npm start:dev` to watch files for update.
4. Seed the users using command: `npm run seed`

### Deploying the Client

1. Navigate to the client folder: `cd client`
2. Build the client: `npm run build`
3. Serve the client: `npm run serve`

### If using Docker for deployment:

Can be deployed by using Makefile or by using the following commands:

1. build:docker-compose build
2. run: docker-compose up -d
3. stop: docker-compose down 
4. status: docker-compose ps
