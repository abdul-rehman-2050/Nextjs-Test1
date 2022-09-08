/*
Help links:
https://next-auth.js.org/providers/google


*/

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

        const mUser = await prisma.User.findUnique({
          where: {
            email: credentials?.username,
          },
        });

        if (mUser) {
          return mUser;
        } else {
          return null;
        }

        /*
              const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }
              if(credentials?.username=="test@gmail.com" && credentials?.password=="hello123"){
                return user
              }else{
                return null;
              }   */
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
  ],
  theme: {
    colorScheme: "dark",
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
