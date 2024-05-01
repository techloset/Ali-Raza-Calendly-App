import { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { prisma } from "@/app/libs/prismadb";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        const { email, password } = credentials;

        if (!email || !password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          console.log("user not found.....");
          return null;
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!passwordMatch) {
          console.log("invalidPassword");
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, name: user.name, id: user.id, image: user.image };
      }
      return token;
    },

    async session({ session, token }): Promise<any> {
      if (token && token.username) {
        return {
          ...session,
          user: {
            ...session.user,
            name: token.name,
            id: token.id,
            image: token.image,
          },
        };
      }
      return session;
    },

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
                id: profile?.id,
                name: profile?.name,
                email: profile?.email,
                username: profile?.email,
                password: "",
                image: profile?.picture,
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
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signup",
  },
};

const handler = NextAuth(authOptions);
export default handler;
