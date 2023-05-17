// passport.config.ts
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import argon2 from "argon2";
import User from "../entity/user.entity";
import { IUser } from "../types/user.interface"


// Define the local strategy for username/password authentication
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (username, password, done) => {
      try {
        // Find the user by email in the database
        const user = await User.findOne({ where: { email: username } });

        // Check if the user exists
        if (!user) {
          // User not found, indicate failure
          return done(null, false, { message: "Email address not registered." });
        }
        // Check if the email address has been verified
        if (!user.verified) {
          return done(null, false, { message: "Email address not verified." })
        }

        // Compare passwords
        let checkPassword: boolean = false;

        if (user.password) {
          checkPassword = await argon2.verify(user.password, password);
        }

        if (!checkPassword) {
          // Invalid password, indicate failure
          return done(null, false, { message: "Invalid password." });
        }

        // Authentication successful, pass the user object
        return done(null, user);

      } catch (error) {
        // Handle any errors that occur during authentication
        return done(error);
      }
    }
  )
);


// Serialize and deserialize user objects
passport.serializeUser((user: any, done) => {
  // Serialize the user object (e.g., store the user ID)
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Deserialize the user object (e.g., retrieve the user from the database)
  // Call the `done` callback with the deserialized user object
});
