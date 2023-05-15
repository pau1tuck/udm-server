import { v4 as uuid } from "uuid";
import { IResolvers } from "@graphql-tools/utils";
import User from "../../entity/user.entity";

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
                staff.email = input.email;
                staff.password = input.password;
                staff.verified = true;
                staff.roles = input.roles;

                // Save the staff entity to the database
                await staff.save();

                return staff;
            } catch (error) {
                throw new Error("Failed to create new staff member.");
            }
        },
    },
};
