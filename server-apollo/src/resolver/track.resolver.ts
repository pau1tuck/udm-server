// @/resolvers/track.resolver.ts
import { v4 as uuid } from "uuid";
import { IResolvers } from "@graphql-tools/utils";
import { ITrack, ITrackUpdate } from "../types/track.interface";

const track: any = {};
const tracks: ITrack[] = [];

const trackResolver: IResolvers = {
    Query: {
        // Read all
        tracks: (): ITrack[] => {
            // Resolver function for the "tracks" query
            return tracks;
        },
        // Read one
        track: (
            _: undefined,
            args: {
                id: string;
            }
        ) => {
            return track;
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
                id: uuid(), // Generate UUID v4 as the ID
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

        updateTrack: (
            _: undefined,
            args: {
                id: string;
                trackId: string;
                artist: string;
                title: string;
                version?: string | null;
                label: string;
                month: number;
                year: number;
                buyUrl?: string | null;
            }
        ): ITrackUpdate => {
            const updatedTrack: ITrackUpdate = {
                id: args.id,
                trackId: args.trackId,
                artist: args.artist,
                title: args.title,
                version: args.version || null,
                label: args.label,
                month: args.month,
                year: args.year,
                buyUrl: args.buyUrl || null,
                updatedAt: new Date().toISOString(),
            };
            return updatedTrack;
        },
    },
};

export default trackResolver;
