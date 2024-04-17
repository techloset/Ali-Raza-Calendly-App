"use client";
import React from "react";
import Test from "./(components)/Test";
import { signOut } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Home() {
  const router = useRouter();

  return (
    <div>
      Home
      <Test />
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
