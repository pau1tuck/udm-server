import { IResolvers } from "@graphql-tools/utils";
import User from "../../entity/user.entity";

const readUserResolver: IResolvers = {
    Mutation: {
        readUser: async (_, { id }) => {
            try {
                const user = await User.findOne(id);

                if (!user) {
                    throw new Error("User not found.");
                }

                return user;
            } catch (error) {
                throw new Error("Failed to locate user.");
            }
        },
    },
};

export default readUserResolver;
