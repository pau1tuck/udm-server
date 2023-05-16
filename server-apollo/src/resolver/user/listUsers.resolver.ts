import { IResolvers } from "@graphql-tools/utils";
import User from "../../entity/user.entity";

const listUsersResolver: IResolvers = {
    Query: {
        listUsers: async () => {
            try {
                const users = await User.find();

                if (!users || users.length === 0) {
                    throw new Error("No users found.");
                }

                return users;
            } catch (error) {
                throw new Error("Failed to list users.");
            }
        },
    },
};

export default listUsersResolver;
