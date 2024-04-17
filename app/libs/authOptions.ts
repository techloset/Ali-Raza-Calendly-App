// import CredentialsProvider from "next-auth/providers/credentials";
// import { AuthOptions } from "next-auth";

// import bcrypt from "bcryptjs";
// import { prisma } from "./prismadb";

// export const authOptions: AuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {},
//       async authorize(credentials) {
//         const { email, password } = credentials;
//         if (!email || !password) {
//           throw new Error("Missing credentials");
//         }
//         const user = await prisma.user.findUnique({
//           where: {
//             email: email,
//           },
//         });
//         if (!user) {
//           throw new Error("Invalid credentials");
//         }
//       },
//     }),
//   ],

//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/signup",
//     // error: "/signin",
//     // signOut: "/signin",
//   },
// };
