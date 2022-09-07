import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '../../../prisma';


export default NextAuth({
    adapter: PrismaAdapter(prisma),
    session:{
        strategy: 'jwt'
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
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
             /*  const user2 = await prisma.user.findUnique({
                  where: { name: credentials?.username },
                });
                console.log(user2);
                if (user2) {
                  return user2;
                } else {
                  return null;
                }
                */
              // Add logic here to look up the user from the credentials supplied
              const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }
              if(credentials?.username=="test@gmail.com" && credentials?.password=="hello123"){
                return user
              }else{
                return null;
              }
            }
          })
  ],
  callbacks: {
    session({ session, token, user }) {
      return session // The return type will match the one returned in `useSession()`
    },
  
  },
})