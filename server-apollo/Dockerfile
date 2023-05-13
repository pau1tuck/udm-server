# Use a lightweight Node.js base image
FROM node:18-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json ./

# Install pnpm globally
RUN npm install -g pnpm

# Install nodemon globally
RUN npm install -g nodemon

# Install PostgreSQL client
RUN apk add postgresql-client

# Install Redis
RUN apk add redis

# Expose the port your application listens on
EXPOSE $PORT

# Set environmental variables
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV:-development}
ENV PORT=$PORT
ENV DB_HOST=$DB_HOST
ENV DB_PORT=$DB_PORT
ENV DB_NAME=$DB_NAME
ENV DB_USER=$DB_USER
ENV DB_PASS=$DB_PASS

# Development stage
FROM base AS development

# Install devDependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Set up the database and perform backup
RUN apk add --no-cache postgresql
RUN apk add --no-cache --virtual .build-deps postgresql-dev gcc g++ make
RUN npm install -g pg
RUN echo "CREATE DATABASE $DB_NAME;" | psql -h $DB_HOST -p $DB_PORT -U $DB_USER
RUN pg_dump -h $DB_HOST -p $DB_PORT -U $DB_USER $DB_NAME > backup.sql
RUN apk del .build-deps

# Start the development server
# CMD ["pnpm", "run", "start-dev"]

# Production stage
FROM base AS production

# Install production dependencies
RUN pnpm install --prod

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm run build

# Start the application
CMD ["pnpm", "run", "start-dev"]
