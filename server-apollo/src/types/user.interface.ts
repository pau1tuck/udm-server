export interface IUser {
    id: string;
    facebookId?: string;
    googleId?: string;
    twitterId?: string;
    givenName?: string;
    familyName?: string;
    city?: string;
    country?: string;
    avatar?: string;
    email?: string;
    password?: string;
    verified: boolean;
    roles?: string[];
    createdAt: string;
    updatedAt: string;
}