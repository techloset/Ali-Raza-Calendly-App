"use client";
import Button from "@/app/(components)/Button";
import InputField from "@/app/(components)/Input";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SignupLogo from "../../(asset)/images/auth_images/logo-calendly.svg";
import Openeye from "../../(asset)/images/auth_images/Open-eye.png";
import Closeeye from "../../(asset)/images/auth_images/Closed-eye.png";
import toast from "react-hot-toast";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const router = useRouter();
  const handleSubmit = async () => {
    if (!name || !username || !email || !password) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const res = await axios.post("/api/register", {
        name,
        username,
        email,
        password,
      });

      toast.success("User created successfully...");
      router.push("/signin");
    } catch (error: any) {
      console.log("error", error);
      toast.error(error?.response?.data || "Something went wrong.");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <div className="bg-white ">
        <div className=" text-md flex justify-center items-center">
          <Image
            src={SignupLogo}
            width={100}
            height={50}
            alt="logo"
            className="h-14 w-40"
          />
        </div>
        <div className="text-white-500 text-md flex justify-center items-center font-bold ">
          <Link href="" className="hover:underline text-center">
            Sign up with Calendly for <br /> free
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <form className="bg-white shadow-black shadow-md rounded-lg px-8 pb-4 mb-3 w-[440px] ">
            <div className=" pt-6">
              <label
                className="block text-gray-700  font-bold mb-1"
                htmlFor="email"
              >
                Enter your email to get started
              </label>
              <InputField
                name="email"
                value={email}
                id="email"
                placeholder=" Email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-4 mt-3">
              <label
                className="block text-gray-700 font-bold mb-1"
                htmlFor="email"
              >
                Enter your full name
              </label>
              <InputField
                name="name"
                value={name}
                id="name"
                placeholder=" Name"
                type="text"
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-1"
                htmlFor="username"
              >
                Enter your username
              </label>
              <InputField
                name="username"
                value={username}
                id="username"
                placeholder=" Username"
                type="text"
                onChange={(e: any) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 font-bold mb-1"
                htmlFor="password"
              >
                Choose a password with at least 8 characters
              </label>
              <InputField
                name="password"
                value={password}
                id="password"
                placeholder=" Password"
                type={!isPasswordVisible ? "password" : "text"}
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
              />
              <div
                onClick={togglePasswordVisibility}
                className="cursor-pointer relative xx:left-[270px] xs:left-[320px] sm:left-[330px] md:left-[330px] bottom-11 inline-flex  justify-end rounded-full p-2 "
              >
                <Image
                  src={isPasswordVisible ? Openeye : Closeeye}
                  alt="eye"
                  className="h-5 w-5 "
                />
              </div>
            </div>

            <div className=" ">
              <div className="text-red-500 mx-5 text-sm">
                Use a few words, avoid common phrases <br />
                No need for symbols, digits, or uppercase letters
              </div>
            </div>
            <div className="mb-4 center">
              <div className="text-sm text-center">
                By creating a Calendly account, you agree to
                <span className="text-blue-500"> Calendly's Terms</span> and
                <span className="text-blue-500"> Privacy Policy</span>
              </div>
            </div>
            {error && (
              <div className="mb-6 bg-red-400 rounded-xl w-[180px] h-10 flex justify-center items-center">
                {error}
              </div>
            )}
            <div className="flex items-center justify-center mt-4">
              <Button name="Sign Up " onClick={handleSubmit} />
            </div>
            <div className="flex items-center justify-center mt-4 text-sm text-center">
              Already have an account?&ensp;
              <Link
                href="/signin"
                className="text-blue-700 hover:underline hover: cursor-pointer font-bold"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
