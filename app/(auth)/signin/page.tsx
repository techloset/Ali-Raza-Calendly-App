"use client";
import Button from "@/app/(components)/Button";
import InputField from "@/app/(components)/Input";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SignupLogo from "../../(asset)/images/auth_images/logo-calendly.svg";
import Openeye from "../../(asset)/images/auth_images/Open-eye.png";
import Closeeye from "../../(asset)/images/auth_images/Closed-eye.png";
import toast from "react-hot-toast";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const login = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      if (login?.error) {
        setError(login.error);
      } else {
        toast.success("Successfully logged in");
        router.push("/");
      }
    } catch (error: any) {
      toast.error(error.message);
    }

    setLoading(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="bg-white mt-10">
      <div className=" text-md flex justify-center items-center">
        <Image
          src={SignupLogo}
          width={100}
          height={50}
          alt="logo"
          className="h-14 w-40 mb-5"
        />
      </div>
      <div className="flex justify-center items-center">
        <form className="bg-white shadow-black shadow-md rounded-lg px-8 pb-4 mb-3 w-[440px] ">
          <div className="text-white-500 text-md flex justify-center items-center font-bold mt-8">
            <Link href="" className=" text-center  ">
              Sign In with Calendly for <br /> free
            </Link>
          </div>
          <div className=" pt-6">
            <label
              className="block text-gray-700  font-bold mb-2"
              htmlFor="email"
            >
              Enter Email
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

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2 mt-3"
              htmlFor="password"
            >
              Enter Password
            </label>
            <InputField
              name="password"
              value={password}
              id="password"
              placeholder=" Password"
              type={!isPasswordVisible ? "password" : "text"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div
              onClick={togglePasswordVisibility}
              className="cursor-pointer relative xx:left-[270px] xs:left-[320px] sm:left-[330px] md:left-[330px] bottom-11 inline-flex  justify-end rounded-full p-2"
            >
              <Image
                src={isPasswordVisible ? Openeye : Closeeye}
                alt="eye"
                className="h-6 w-6"
              />
            </div>
            <div>
              <Link
                href="/forgotpassword"
                className="text-blue-700 hover:underline hover: cursor-pointer font-medium inline relative left-56 bottom-6"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="mb-4 ">
            <div className="text-red-500 mx-5 text-sm">
              Use a few words, avoid common phrases <br />
              No need for symbols, digits, or uppercase letters
            </div>
          </div>

          {error && (
            <div className="mb-6 bg-red-400 rounded-xl w-[180px] h-10 flex justify-center items-center">
              {error}
            </div>
          )}
          <div className="flex items-center justify-center mt-4">
            <Button name="Sign In " onClick={handleSubmit} />
          </div>
          <div className="flex items-center justify-center mt-4 text-sm text-center">
            Don't have an account?&ensp;
            <Link
              href="/signup"
              className="text-blue-700 hover:underline hover: cursor-pointer font-bold"
            >
              Sign Up
            </Link>
          </div>
          <div className="flex items-center justify-center mt-4 text-sm text-center">
            SignUp with Google?&ensp;
            <Button
              name="SignIn with Goole "
              onClick={() => signIn("google", { callbackUrl: "/" })}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
