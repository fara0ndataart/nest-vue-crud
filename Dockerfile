# Base image for client
FROM node:14-alpine AS client

# Set the working directory for client
WORKDIR /client

# Copy client package.json and package-lock.json
COPY client/package*.json ./

# Install client dependencies
RUN npm install

# Copy the entire client project
COPY client .

# Build the client project
RUN npm run build

# Start the API
CMD ["npm", "run", "serve"]

# Base image for API
FROM node:14-alpine AS api

# Set the working directory for API
WORKDIR /api

# Copy API package.json and package-lock.json
COPY api/package*.json ./

# Install API dependencies
RUN npm install

# Copy the entire API project
COPY api .

# Build the API project
RUN npm run build

# Run the seeders
CMD ["npm", "run", "seed"]

# Expose the API port
EXPOSE 3000

# Start the API
CMD ["npm", "run", "start:dev"]
