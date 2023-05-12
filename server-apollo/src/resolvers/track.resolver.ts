import { v4 as uuid4 } from "uuid";
import { IResolvers } from "@graphql-tools/utils";
import { ITrack } from "@/types/track.interface"; // Assuming you have a separate file defining the Track type

const tracks: ITrack[] = []; // Sample data

const trackResolvers: IResolvers = {
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
                version?: string;
                label: string;
                month: number;
                year: number;
                buyUrl?: string;
            }
        ): ITrack => {
            // Resolver function for the "createTrack" mutation
            const newTrack: ITrack = {
                id: uuid4(), // Generate UUID v4 as the ID
                trackId: args.trackId, // Use the user-provided trackId
                artist: args.artist,
                title: args.title,
                version: args.version,
                label: args.label,
                month: args.month,
                year: args.year,
                buyUrl: args.buyUrl,
                votes: 0, // Set initial vote count
                createdAt: new Date().toISOString(), // Set the current timestamp
                updatedAt: new Date().toISOString(), // Set the current timestamp
            };

            tracks.push(newTrack); // Add the new track to the list

            return newTrack;
        },
    },
};

export default trackResolvers;
