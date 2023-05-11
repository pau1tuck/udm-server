import { gql } from "graphql-tag";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

const typeDefs = gql`
    ${require("./trackgql").default}
`;

export default typeDefs;
