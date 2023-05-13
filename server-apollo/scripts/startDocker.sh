#!/bin/bash

# Start the Docker container with PostgreSQL
docker run --rm --name udm-server-apollo -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=badpassword -p 5432:5432 -d postgres:latest

# Wait for the PostgreSQL container to start
sleep 5

# Perform a database backup
pg_dump -U admin -h localhost -p 5432 udm-server-apollo > backup.sql