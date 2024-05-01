import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import bcrypt from "bcryptjs";
import { prisma } from "../libs/prismadb";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        const { email, password }: any = credentials;

        // Replace with your Prisma client or database access logic
        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        console.log("email", email);

        if (!user) {
          console.log("User not found");
          return null;
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log("password,user.password", password, user.password);
        if (!passwordMatch) {
          console.log("Invalid password");
          return null;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }: any) {
      if (account?.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: profile?.email },
        });
        if (existingUser) {
          console.log("User already exists:", existingUser);
        } else {
          try {
            const newUser = await prisma.user.create({
              data: {
                name: profile?.name,
                email: profile?.email,
                image: profile.picture,
                username: profile?.email,
                password: "",
              },
            });
            console.log("User created:", newUser);
          } catch (error) {
            console.log("Error creating user:", error);
          }
        }
      }
      return true;
    },
  },
};
