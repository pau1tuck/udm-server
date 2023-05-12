export interface ITrack {
    id: string;
    trackId: string;
    artist: string;
    title: string;
    version: string | null;
    label: string;
    month: number;
    year: number;
    buyUrl: string | null;
    votes: number;
    createdAt: string;
    updatedAt: string;
}
