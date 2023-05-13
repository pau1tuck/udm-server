#!/bin/bash

# Load environment variables from .env file
set -a
source .env
set +a

# Remove existing udm-server-apollo container
echo "Removing existing udm-server-apollo container..."
docker stop udm-server-apollo
docker rm udm-server-apollo

# Build the Docker image using the Dockerfile if it doesn't exist
if [[ "$(docker images -q udm-server-apollo 2> /dev/null)" == "" ]]; then
    docker build -t udm-server-apollo .
fi

# Start the Docker container with PostgreSQL
echo "Starting udm-server-apollo container..."
docker run --name udm-server-apollo -e POSTGRES_USER=$DB_USER -e POSTGRES_PASSWORD=$DB_PASS -e POSTGRES_DB=$DB_NAME -p $DB_PORT:5432 -d postgres:latest

# Wait for the PostgreSQL container to start
echo "Waiting for PostgreSQL container to start..."
until docker exec -it udm-server-apollo pg_isready -U $DB_USER; do
  sleep 1
done

# Create the database if it doesn't exist
echo "Creating database $DB_NAME..."
docker exec -it udm-server-apollo psql -U $DB_USER -c "DO \$\$ BEGIN CREATE DATABASE $DB_NAME; EXCEPTION WHEN duplicate_database THEN END; \$\$"

# Perform a database backup
echo "Performing database backup..."
docker exec -it udm-server-apollo pg_dump -U $DB_USER -d $DB_NAME > backup.sql
