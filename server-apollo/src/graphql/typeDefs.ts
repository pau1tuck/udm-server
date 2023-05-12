// @/graphql/typeDefs.ts
import { DocumentNode } from "graphql";
import { readFileSync } from "fs";
import { resolve } from "path";
import { gql } from "graphql-tag";

const schemaPath = resolve(__dirname, "schema.graphql");
const typeDefs: DocumentNode = gql(readFileSync(schemaPath, "utf-8"));

export default typeDefs;
