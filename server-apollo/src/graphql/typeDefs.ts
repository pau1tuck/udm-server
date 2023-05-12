import { gql } from "graphql-tag";
import { readFileSync } from "fs";
import { resolve } from "path";

const schemaPath = resolve(__dirname, "../src/graphql/schema.graphql");
const typeDefs = gql`
    ${readFileSync(schemaPath, "utf-8")}
`;

export default typeDefs;
