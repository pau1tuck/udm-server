import { IResolvers } from "@graphql-tools/utils";
import User from "../../entity/user.entity";
import { isSuperUser } from "../../utils/check-permissions";

const deleteUserResolver: IResolvers = {
    Mutation: {
        deleteUser: async (_, { id }, { req, res }) => {
            if (
                isSuperUser(req, res, () => {
                    return undefined;
                })
            ) {
                try {
                    const user = await User.findOne(id);

                    if (!user) {
                        throw new Error("User not found.");
                    }

                    // Delete the user
                    await user.remove();

                    return { ...user, note: "User deleted." };
                } catch (error) {
                    throw new Error("Failed to delete user.");
                }
            }
            return undefined;
        },
    },
};

export default deleteUserResolver;
