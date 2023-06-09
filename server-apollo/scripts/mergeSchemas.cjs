const { join } = require("path");
const { writeFileSync } = require("fs");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { print } = require("graphql");

// Define the schema files directory based on the operating system
const schemaFilesDir =
    process.platform === "win32"
        ? join(__dirname, "..\\src\\graphql\\**\\*.graphql") // Windows
        : join(__dirname, "../src/graphql/**/*.graphql"); // Mac/Linux

const loadedFiles = loadFilesSync(schemaFilesDir);
const mergedSchema = mergeTypeDefs(loadedFiles);

// Define the output path based on the operating system
const outputPath =
    process.platform === "win32"
        ? join(__dirname, "..\\src\\graphql\\schema.graphql") // Windows
        : join(__dirname, "../src/graphql/schema.graphql"); // Mac/Linux

writeFileSync(outputPath, print(mergedSchema));

console.log(`Merged GraphQL schema saved to ${outputPath}`);
