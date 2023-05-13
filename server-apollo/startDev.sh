#!/bin/bash

# Remove existing udm-server-apollo container
echo "Removing existing udm-server-apollo container..."
docker stop udm-server-apollo
docker rm udm-server-apollo

# Build the Docker image using the Dockerfile if it doesn't exist
if [[ "$(docker images -q udm-server-apollo 2> /dev/null)" == "" ]]; then
    docker build -t udm-server-apollo .
fi

# Start the Docker containers using docker-compose
echo "Starting udm-server-apollo, postgresql, and redis containers..."
docker-compose up -d

# Start the development server
echo "Starting development server..."
docker exec -itd udm-server-apollo sh -c "cd /app && node dist/server.js"

# Keep the container running and display logs
echo "Container is running. Press Ctrl+C to stop."
docker logs -f udm-server-apollo
