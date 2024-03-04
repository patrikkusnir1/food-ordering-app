import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../../libs/MongoConnect"
import * as mongoose from "mongoose"
import { User } from "../../../../models/User"
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

const handler = NextAuth({
    secret: process.env.SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            name: 'Credentials',
            id: "credentials",
            credentials: {
                username: { label: "Email", type: "email", placeholder: "test@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const email = credentials?.email;
                const password = credentials?.password;

                mongoose.connect(process.env.MONGO_URL);
                const user = await User.findOne({ email })
                const passwordOk = user && bcrypt.compareSync(password, user.password);

                console.log(passwordOk);

                if (passwordOk) {
                    return user;
                }
                // Return null if user data could not be retrieved
                return null;
            }
        })
    ],
});

// Export the handler for POST requests
export { handler as GET, handler as POST };
