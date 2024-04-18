"use client";
import Button from "@/app/(components)/Button";
import InputField from "@/app/(components)/Input";
import axios from "axios";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
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
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post("api/register", {
        email,
        password,
      });
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      toast.success("User created successfully");
      router.push("/");

      console.log(res);
    } catch (error: any) {
      toast.error(error?.response?.data);
    }
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
          <div className="mb-4 mt-8">
            <div className=" mx-5 text-2xl font-bold">
              Don't worry! <br /> We will send you an email to reset your
              password.
            </div>
          </div>
          <div className=" pt-6">
            <label
              className="block text-gray-700  font-bold mb-2"
              htmlFor="email"
            ></label>

            <InputField
              name="email"
              value={email}
              id="email"
              placeholder=" Email for Forgot Password"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          {error && (
            <div className="mb-6 bg-red-400 rounded-xl w-[180px] h-10 flex justify-center items-center">
              {error}
            </div>
          )}
          <div className="flex items-center justify-center mt-8">
            <Button
              name="Send Mail"
              onClick={() => {
                handleSubmit;
              }}
            />
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
  );
}
