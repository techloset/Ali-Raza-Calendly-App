import { URL } from "@/app/constants/SiteUrl";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleSubmit = async () => {
    if (!name || !username || !email || !password) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (password.length < 6 || password.length > 15) {
      return toast.error(
        "Password least 6 characters long and less than 15 characters long"
      );
    }
    if (name.length || username.length < 4) {
      return toast.error("Name and Username least 4 characters long");
    }
    if (email.length < 4) {
      return toast.error("Email least 4 characters long");
    }

    try {
      const res = await axios.post(`${URL}/api/register`, {
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
    setIsPasswordVisible,
    handleSubmit,
    togglePasswordVisibility,
    loading,
  };
}
