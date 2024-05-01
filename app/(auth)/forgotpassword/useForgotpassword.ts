import { URL } from "@/app/constants/SiteUrl";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function useForgotpassword() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${URL}/api/register`, {
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
  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    error,
    setError,
    isPasswordVisible,
    setPasswordVisible,
    loading,
    setLoading,
    handleSubmit,
    togglePasswordVisibility,
  };
}
