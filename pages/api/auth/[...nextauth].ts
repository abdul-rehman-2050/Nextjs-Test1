/*
Help links:
https://next-auth.js.org/providers/google


*/

/*
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import prisma from "../../../prisma";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 3000,
  },
  providers: [
   
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@gmail.com" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        console.log(credentials);

        const mUser = await prisma.user.findUnique({
          where: {
            email: credentials?.username,
          },
        });

        if (mUser) {
          return mUser;
        } else {
          return null;
        }

        
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID as string,
      clientSecret: process.env.TWITTER_SECRET as string,
    }),
  ],
  theme: {
    colorScheme: "dark",
  },
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    session({ session, token, user }) {
      return session // The return type will match the one returned in `useSession()`
    },
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
  },
  debug: true,
});
*/


import NextAuth from "next-auth";

import { nextAuthOptions } from "../../../src/common/auth";

export default NextAuth(nextAuthOptions);