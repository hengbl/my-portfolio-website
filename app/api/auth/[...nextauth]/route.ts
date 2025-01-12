import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prismaClient } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

/** Configuration file for NextAuth
 * We need to include [...nextauth] as it catches all routes that start with /api/auth
 * which includes the signIn, signOut, and session routes
 * so we do not need to create separate routes for these
 * 
 * For signing in flow, signIn() will send the credentials to the authorize() function
 * which will return the user object if the credentials are valid
 * and the user object will be used to create the session object and jwt token
 * 
 * If the credentials are invalid, the authorize() function will return null
 */
export const authOptions: NextAuthOptions= {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text'},
                password: { label: 'Password', type: 'password'}
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) return null;
                const user = await prismaClient.user.findUnique({
                    where: { username: credentials?.username }
                });
                if (!user) return null;

                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) return null;
                // these information will be available in the session object
                // and would be used inside the jwt token to identify the user
                return {
                    id: user.id,
                    name: user.username,
                };
            }
        })
    ],
    pages: {
        // tells NextAuth to redirect here when authentication is required
        signIn: '/login',
    },
    // create a jwt token for the user upon sign in
    session: {
        strategy: 'jwt',
    },
    // to encrypt the JWT token
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
