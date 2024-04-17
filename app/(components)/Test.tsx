"use client";
import { signOut } from "next-auth/react";
import React from "react";
const handleSignout = () => {
  signOut();
  alert("Signed out");
};
export default function Test() {
  return (
    <>
      <h1>Test</h1>
      <button
        type="button"
        className="h-[44px] w-auto bg-[#0069FF] hover:bg-[#0069FF] text-white font-bold py-2 px-4 rounded-3xl"
        onClick={handleSignout}
      >
        Sign out
      </button>
    </>
  );
}
