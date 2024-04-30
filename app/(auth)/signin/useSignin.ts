import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function useSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);

    if (!email || !password) {
      return toast.error("Please fill in all required fields");
    }
    if (password.length < 6 || password.length > 15) {
      return toast.error(
        "Password least 6 characters long and less than 15 characters long"
      );
    }
    if (email.length < 4) {
      return toast.error("Email least 4 characters long");
    } else if (email.length > 30) {
      return toast.error("Email must be less than 30 characters long");
    }

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
  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    isPasswordVisible,
    togglePasswordVisibility,
    handleSubmit,
    loading,
  };
}
