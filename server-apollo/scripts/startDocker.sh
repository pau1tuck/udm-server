#!/bin/bash

# Load environment variables from .env file
set -a
source .env
set +a

# Build the Docker image using the Dockerfile
docker build -t udm-server-apollo .

# Start the Docker container with PostgreSQL
docker run --rm --name udm-server-apollo -e POSTGRES_USER=$DB_USER -e POSTGRES_PASSWORD=$DB_PASSWORD -p $DB_PORT -d postgres:latest

# Wait for the PostgreSQL container to start
sleep 5

# Perform a database backup
pg_dump -U $DB_USER -h localhost -p $DB_PORT $DB_NAME > backup.sql
