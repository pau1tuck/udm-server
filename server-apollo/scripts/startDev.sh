# scripts/startDev.sh
#!/bin/bash

concurrently "./node_modules/.bin/tsc -w" "mkdir -p ./dist/graphql && cp ./src/graphql/schema.graphql ./dist/graphql" "mkdir -p ./dist/views && cp -R ./src/views ./dist/" "./node_modules/.bin/nodemon ./dist/server.js"
