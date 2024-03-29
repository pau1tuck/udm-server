import { IResolvers } from "@graphql-tools/utils";
import User from "../../entities/user.entity";

const updateUserResolver: IResolvers = {
    Mutation: {
        updateUser: async (_, { id, input }) => {
            try {
                // Find the user by ID
                const user = await User.findOne(id);

                // If user not found, throw an error
                if (!user) {
                    throw new Error("User not found.");
                }

                // Perform dynamic updates based on the provided fields in the input
                Object.assign(user, input);

                // Save the updated user entity to the database
                await user.save();

                return user;
            } catch (error) {
                throw new Error("Failed to update user.");
            }
        },
    },
};

export default updateUserResolver;
