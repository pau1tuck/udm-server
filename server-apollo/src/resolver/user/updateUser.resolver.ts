import { IResolvers } from "@graphql-tools/utils";
import User from "../../entity/user.entity";

const updateUserResolver: IResolvers = {
    Mutation: {
        updateUser: async (_, { id, input }) => {
            try {
                // Find the user by ID
                const user = await User.findOne(id);

                // If user not found, throw an error
                if (!user) {
                    throw new Error("User not found");
                }

                // Update the user properties from the input arguments
                user.givenName = input.givenName;
                user.familyName = input.familyName;
                user.city = input.city;
                user.country = input.country;
                user.avatar = input.avatar;
                user.email = input.email;
                user.password = input.password;

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
