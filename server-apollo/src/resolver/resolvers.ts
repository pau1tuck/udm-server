import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";

// Load all resolver files
const resolverArray = loadFilesSync(path.join(__dirname, "./*.resolver.ts"));

// Merge all loaded resolvers
const resolvers = mergeResolvers(resolverArray);

export default resolvers;
