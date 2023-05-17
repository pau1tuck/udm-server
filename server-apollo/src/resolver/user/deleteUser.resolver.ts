import { IResolvers } from "@graphql-tools/utils";
import User from "../../entity/user.entity";

const deleteUserResolver: IResolvers = {
  Mutation: {
    deleteUser: async (_, { id }) => {
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
    },
  },
};

export default deleteUserResolver;
