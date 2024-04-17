// "use client";
// import { SessionProvider } from "next-auth/react";
// import React from "react";
// interface NextAuthSessionProviderProps {
//   children: React.ReactNode;
// }
// export default function AuthProvider({
//   children,
// }: NextAuthSessionProviderProps) {
//   return(
//     <SessionProvider>
//       {children}
//     </SessionProvider>
//   )
// }

// import { SessionProvider } from "next-auth/react";
// import React from "react";

// interface AuthProviderProps {
//   children: React.ReactNode;
// }

// export default function AuthProvider({ children }: AuthProviderProps) {
"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

interface AuthProviderProps {
  children: React.ReactNode;

  SessionProvider: typeof SessionProvider;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
