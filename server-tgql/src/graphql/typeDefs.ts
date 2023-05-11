// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

export const trackTypeDefs = `#graphql
    type Track {
        id: ID!
        trackId: String!
        artist: String!
        title: String!
        version: String?
        label: String!
        month: Number!
        year: Number!
        buyUrl: String!
        votes: Number!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        tracks: [Track!]!
    }

    type Mutation {
        createTrack(artist: String!, title: String!, version: String?, label: String!): Track!
    }
`;
