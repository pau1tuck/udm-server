import { v4 as uuid } from "uuid";
import { IResolvers } from "@graphql-tools/utils";
import User from "../../entities/user.entity";

const createUserResolver: IResolvers = {
    Mutation: {
        createUser: async (_, args) => {
            try {
                const { input } = args;

                // Create a new instance of the User entity
                const user = new User();

                // Generate a UUID for the user ID
                user.id = uuid();

                // Set the required user properties from the input arguments
                user.givenName = input.givenName;
                user.familyName = input.familyName;
                user.city = input.city;
                user.country = input.country;
                user.email = input.email;
                user.password = input.password;

                // Save the user entity to the database
                await user.save();

                return user;
            } catch (error) {
                throw new Error("Failed to create new user.");
            }
        },
    },
};

export default createUserResolver;
