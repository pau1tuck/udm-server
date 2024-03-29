#!/bin/bash

# Remove existing udm-server-apollo container
echo "Removing existing udm-server-apollo container..."
docker stop udm-server-apollo
docker rm udm-server-apollo

# Build the Docker image using the Dockerfile if it doesn't exist
if [[ "$(docker images -q udm-server-apollo 2> /dev/null)" == "" ]]; then
    docker build -t udm-server-apollo .
fi

# Start the Docker container
echo "Starting udm-server-apollo container..."
docker run --name udm-server-apollo -e POSTGRES_USER=$DB_USER -e POSTGRES_PASSWORD=$DB_PASS -e POSTGRES_DB=$DB_NAME -p $DB_PORT:5432 -v $(pwd)/dist:/app/dist -d udm-server-apollo

# Keep the container running and display logs
echo "Container is running. Press Ctrl+C to stop."
docker logs -f udm-server-apollo
