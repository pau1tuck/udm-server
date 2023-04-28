import { Arg, Authorized, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Track } from "../entity/track.entity.js";
import { PaginatedTracks, TrackInput } from "../types/track.types.js";
import { redisClient } from "../config/redis.js";

const TRACKS_CACHE_KEY = process.env.TRACKS_CACHE_KEY || "key";

@Resolver(Track)
export class TrackResolver {
    // READ ALL TRACKS
    @Query(() => PaginatedTracks)
    async tracks(
        @Arg("limit", () => Int)
        limit: number
    ): Promise<PaginatedTracks> {
        const allTracks = (await redisClient.lrange(TRACKS_CACHE_KEY, 0, -1)) || [];
        const tracks = allTracks.map((track: string) => JSON.parse(track));
        return {
            payload: tracks.slice(0, limit),
            hasMore: tracks.length === limit + 1,
        };
    }

    // READ ONE TRACK
    @Query(() => Track, { nullable: true })
    track(@Arg("id") id: string): Promise<Track | undefined> {
        return Track.findOne(id);
    }

    // CREATE TRACK
    @Authorized("ADMIN")
    @Mutation(() => Track)
    async createTrack(@Arg("input") input: TrackInput): Promise<Track> {
        const newTrack = await Track.create({
            ...input,
        }).save();
        redisClient.lpush(TRACKS_CACHE_KEY, JSON.stringify(newTrack));
        return newTrack;
    }

    // UPDATE TRACK
    @Authorized("ADMIN")
    @Mutation(() => Track, { nullable: true })
    async updateTrack(
        @Arg("id") id: string,
        @Arg("trackId") trackId: number,
        @Arg("buyUrl") buyUrl: string,
    ): Promise<Track | null> {
        const result = await getConnection()
            .createQueryBuilder()
            .update(Track)
            .set({ trackId, buyUrl })
            .where("id = :id", {
                id,
            })
            .returning("*")
            .execute();

        return result.raw[0];
    }

    // DELETE TRACK
    @Authorized("ADMIN")
    @Mutation(() => Boolean)
    async deleteTrack(@Arg("id") id: string): Promise<boolean> {
        await Track.delete({ id });
        return true;
    }
}
