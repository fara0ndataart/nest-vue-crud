# Build the Docker images for the client and API
build:
	docker-compose build

# Run the Docker Compose for the client and API
run:
	docker-compose up -d

# Stop the Docker Compose services
stop:
	docker-compose down

# Check Docker Compose status
status:
	docker-compose ps
