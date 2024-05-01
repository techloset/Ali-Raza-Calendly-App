"use client";
import React from "react";
import Test from "./(components)/Test";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Test />
      <button className="bg-red-500 text-white m-10">
        <Link href="/availibility">Availibility</Link>
      </button>
      <button className="bg-green-500 text-white m-10">
        <Link href="/eventBooking">eventBooking</Link>
      </button>
      <button className="bg-green-500 text-white m-10">
        <Link href="/scheduleEvent">scheduleEvent </Link>
      </button>
      <button className="bg-green-500 text-white m-10">
        <Link href="/scheduled">scheduled </Link>
      </button>
      <button className="bg-green-500 text-white m-10">
        <Link href="/dash">Dashboard </Link>
      </button>
    </div>
  );
}
