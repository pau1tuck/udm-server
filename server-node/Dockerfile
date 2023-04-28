# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app/udm-server-node

# Install curl and pnpm
RUN apk add --no-cache curl \
    && curl -L https://unpkg.com/@pnpm/self-installer | node \
    && apk del curl

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Install PostgreSQL
RUN apk update && apk add postgresql

# Copy the PostgreSQL configuration file to the container
COPY pg_hba.conf /etc/postgresql/pg_hba.conf

# Copy the database backup file to the container
COPY udm-db-node.backup /tmp/udm-db-node.backup

# Restore the database
RUN pg_restore -U postgres -d mydatabase /tmp/mydatabase.backup

# Expose the ports that the application and database will run on
EXPOSE 5000 5432

# Start the database and server
CMD ["pnpm", "run"]