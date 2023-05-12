// @/resolvers/track.resolver.ts
import { v4 as uuid4 } from "uuid";
import { IResolvers } from "@graphql-tools/utils";
import { ITrack } from "../types/track.interface";

const tracks: ITrack[] = []; // Sample data

const trackResolver: IResolvers = {
    Query: {
        tracks: (): ITrack[] => {
            // Resolver function for the "tracks" query
            return tracks;
        },
    },
    Mutation: {
        createTrack: (
            _: undefined,
            args: {
                trackId: string;
                artist: string;
                title: string;
                version?: string | null;
                label: string;
                month: number;
                year: number;
                buyUrl?: string | null;
            }
        ): ITrack => {
            // Resolver function for the "createTrack" mutation
            const newTrack: ITrack = {
                id: uuid4(), // Generate UUID v4 as the ID
                trackId: args.trackId, // Use the user-provided trackId
                artist: args.artist,
                title: args.title,
                version: args.version || null,
                label: args.label,
                month: args.month,
                year: args.year,
                buyUrl: args.buyUrl || null,
                votes: 0, // Set initial vote count
                createdAt: new Date().toISOString(), // Set the current timestamp
                updatedAt: new Date().toISOString(), // Set the current timestamp
            };

            tracks.push(newTrack);

            return newTrack;
        },
    },
};

export default trackResolver;
