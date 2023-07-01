import { v4 as uuid } from "uuid";
import { IResolvers } from "@graphql-tools/utils";
import User from "../../../entities/user.entity";
import { isSuperUser } from "../../../utils/check-permissions";

const createStaffResolver: IResolvers = {
    Mutation: {
        createStaff: async (_, args, { req, res }) => {
            if (
                isSuperUser(req, res, () => {
                    return undefined;
                })
            ) {
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
                    staff.verified = true;
                    staff.roles = ["MEMBER", "STAFF"];

                    // Save the staff entity to the database
                    await staff.save();

                    return staff;
                } catch (error) {
                    throw new Error("Failed to create new staff member.");
                }
            } else {
                throw new Error("Access denied.");
            }
        },
    },
};

export default createStaffResolver;
