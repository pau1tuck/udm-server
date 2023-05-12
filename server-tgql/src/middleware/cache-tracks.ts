import { getConnection } from "typeorm";
import { Track } from "../entity/track.entity.js";
import { redisClient } from "../config/redis.js";

const TRACKS_CACHE_KEY = process.env.TRACKS_CACHE_KEY || "key";

export const cacheTracks = async () => {
    await redisClient.del(TRACKS_CACHE_KEY);
    // const allTracks = await Track.find();
    const allTracks = await getConnection()
        .getRepository(Track)
        .createQueryBuilder("t")
        .orderBy('t."createdAt"', "ASC")
        .getMany();
    if (allTracks.length) {
        const tracks = allTracks.map((track: any) => JSON.stringify(track));
        await redisClient.lpush(TRACKS_CACHE_KEY, ...tracks);
        console.log(await redisClient.lrange(TRACKS_CACHE_KEY, 0, -1));
    }
};
