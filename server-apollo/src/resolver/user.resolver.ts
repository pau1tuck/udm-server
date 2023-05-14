import { v4 as uuid } from "uuid";
import { IResolvers } from "@graphql-tools/utils";
import User from "../entity/user.entity";

const userResolver: IResolvers = {
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

const staffResolver: IResolvers = {
    Mutation: {
        createStaff: async (_, args) => {
            try {
                const { input } = args;

                // Create a new instance of the User entity
                const staff = new User();

                // Generate a UUID for the staff ID
                staff.id = uuid();

                // Set the staff properties from the input arguments
                staff.givenName = input.givenName;
                staff.familyName = input.familyName;
                staff.email = input.email;
                staff.password = input.password;
                staff.verified = input.verified;
                staff.roles = input.roles;

                // Save the staff entity to the database
                await staff.save();

                return staff;
            } catch (error) {
                throw new Error("Failed to create new staff.");
            }
        },
    },
};

export default [userResolver, staffResolver];
