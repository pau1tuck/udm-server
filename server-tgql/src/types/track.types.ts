import { Field, InputType, Int, ObjectType } from "type-graphql";
import { Track } from "../entity/track.entity.js";

@ObjectType()
export class PaginatedTracks {
    @Field(() => [Track])
    payload?: Track[];

    @Field()
    hasMore!: boolean;
}

@InputType()
export class TrackInput {
    @Field(() => Int)
    trackId!: number;

    @Field()
    artist!: string;

    @Field()
    title!: string;

    @Field()
    version?: string;

    @Field()
    label?: string;

    @Field(() => Int)
    month!: number;

    @Field(() => Int)
    year!: number;

    @Field()
    buyUrl?: string;
}
