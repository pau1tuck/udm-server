const { join } = require("path");
const { writeFileSync } = require("fs");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { print } = require("graphql");

const schemaFiles = join(__dirname, "../src/graphql/*.graphql");
const loadedFiles = loadFilesSync(schemaFiles);
const mergedSchema = mergeTypeDefs(loadedFiles);

const outputPath = join(__dirname, "../src/graphql/schema.graphql");
writeFileSync(outputPath, print(mergedSchema));

console.log(`Merged GraphQL schema saved to ${outputPath}`);
