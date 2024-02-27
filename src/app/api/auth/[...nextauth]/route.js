import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { getRequestMeta } from "next/dist/server/request-meta";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Email", type: "email", placeholder: "test@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                try {
                    const response = await fetch("/your/endpoint", {
                        method: 'POST',
                        body: JSON.stringify(credentials),
                        headers: { "Content-Type": "application/json" }
                    });
                    const user = await response.json();

                    // If no error and we have user data, return it
                    if (response.ok && user) {
                        return user;
                    }
                    // Return null if user data could not be retrieved
                    return null;
                } catch (error) {
                    // Handle fetch or JSON parsing errors
                    console.error('Authorization error:', error);
                    return null;
                }
            }
        })
    ]
});

// Export the handler for POST requests
export default handler;
