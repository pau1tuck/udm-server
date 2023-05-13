# Use a lightweight Node.js base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile --prod

# Copy the rest of the application code
COPY . .

# Install PostgreSQL client
RUN apk add --no-cache postgresql-client

# Expose the port your application listens on
EXPOSE ${PORT}

# Set environmental variables
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV:-development}
ENV PORT=${PORT}
ENV DB_HOST=${DB_HOST}
ENV DB_PORT=${DB_PORT}
ENV DB_NAME=${DB_NAME}
ENV DB_USER=${DB_USER}
ENV DB_PASSWORD=${DB_PASSWORD}

# Start the PostgreSQL service
CMD service postgresql start && \
    psql -U $DB_USER -c "CREATE DATABASE $DB_NAME;" && \
    psql -U $DB_USER -d $DB_NAME -a -f init.sql && \
    pnpm run build && \
    pnpm run dev
