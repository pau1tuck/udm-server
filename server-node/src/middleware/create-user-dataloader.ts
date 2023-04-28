/* eslint-disable no-new */
import DataLoader from "dataloader";
import { User } from "../entity/user.entity.js";

export const createUserDataLoader = () => {
    new DataLoader<number, User>(async (userIds) => {
        const users = await User.findByIds(userIds as number[]);
        const userIdToUser: Record<number, User> = {};
        users.forEach((u: any) => {
            userIdToUser[u.id] = u;
        });

        const sortedUsers = userIds.map((userId) => userIdToUser[userId]);
        console.log("userIds", userIds);
        console.log("map", userIdToUser);
        console.log("sortedUsers", sortedUsers);
        return sortedUsers;
    });
};
