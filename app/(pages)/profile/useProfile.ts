import { URL } from "@/app/constants/SiteUrl";
import axios from "axios";
import { ReactEventHandler, useState } from "react";
import toast from "react-hot-toast";

export const languages = ["english", "urdu", "punjabi", "roman"];

export default function useProfile(): any {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [welcome, setWelcome] = useState("");
  const [language, setLanguage] = useState("");
  const [dateFormat, setDateFormat] = useState("");
  const [timeFormat, setTimeFormat] = useState("");
  const [country, setCountry] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handelChange = (e: any) => {
    setName(e.target.value);
  };
  const handlewelcome = (e: any) => {
    setWelcome(e.target.value);
  };
  const handelLanguage = (e: any) => {
    setLanguage(e.target.value);
  };
  const handelDateFormate = (e: any) => {
    setDateFormat(e.target.value);
  };
  const handelTimeFormate = (e: any) => {
    setTimeFormat(e.target.value);
  };
  const handelCountry = (e: any) => {
    setCountry(e.target.value);
  };
  const handelTimeZone = (e: any) => {
    setTimeZone(e.target.value);
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as any);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileImageClick = () => {
    const fileInput = document.getElementById("image");
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${URL}/api/profile`, {
        image,
        name,
        welcome,
        language,
        dateFormat,
        timeFormat,
        country,
        timeZone,
      });
      console.log("response", response);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  return {
    name,
    welcome,
    language,
    dateFormat,
    timeFormat,
    country,
    timeZone,
    handelChange,
    handlewelcome,
    handelLanguage,
    handelDateFormate,
    handelTimeFormate,
    handelCountry,
    handelTimeZone,
    loading,
    setLoading,
    handleSubmit,
    handleImageChange,
    handleProfileImageClick,
    image,
    errorMessage,
    setErrorMessage,
  };
}
