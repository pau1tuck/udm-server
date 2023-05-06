# Stage 1: Build Rust application
FROM rust:latest AS builder

# Set the working directory
WORKDIR /app

# Copy the source code and Cargo.toml file into the container
COPY . .

# Install Cargo dependencies
RUN cargo fetch

# Build the Rust application
RUN cargo build --release

# Stage 2: Set up the final image with MongoDB and the Rust application
FROM mongo:latest

# Copy the Rust application from the builder stage
COPY --from=builder /app/target/release/server-rust /usr/local/bin/

# Expose the port the application will run on
EXPOSE 8000

# Define the command to run the application
CMD mongod --fork --logpath /var/log/mongodb.log && /usr/local/bin/server-rust


# Build the Docker image: `docker build -t server-rust .`
# Create the Docker volume to retain the MongoDB database: `docker volume create mongodb-data`
# Run the Docker container: `docker run -d --name server-rust -p 8000:8000 -v mongodb-data:/data/db server-rust`

# Check running containers: `docker ps`
# View the logs of the running container: `docker logs server-rust`
# Access the MongoDB shell: `docker exec -it server-rust mongo`
# Stop the container: `docker stop server-rust`