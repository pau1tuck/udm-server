# Use a lightweight Node.js base image
FROM node:18-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json ./

# Install pnpm globally
RUN npm install -g pnpm

# Install PostgreSQL client
RUN apk add postgresql-client

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
ENV DB_PASSWORD=$DB_PASSWORD

# Development stage
FROM base AS development

# Install devDependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Start the development server
CMD pnpm run dev

# Production stage
FROM base AS production

# Install production dependencies
RUN pnpm install --prod

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm run build

# Start the application
CMD pnpm run start
