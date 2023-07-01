import { IResolvers } from "@graphql-tools/utils";
import User from "../../entities/user.entity";
import { isSuperUser } from "../../utils/check-permissions";

const listUsersResolver: IResolvers = {
    Query: {
        listUsers: async (_, __, { req, res }) => {
            if (
                isSuperUser(req, res, () => {
                    return undefined;
                })
            ) {
                try {
                    const users = await User.find();

                    if (!users || users.length === 0) {
                        throw new Error("No users found.");
                    }

                    return users;
                } catch (error) {
                    throw new Error("Failed to list users.");
                }
            } else {
                throw new Error("Access denied.");
            }
        },
    },
};

export default listUsersResolver;
