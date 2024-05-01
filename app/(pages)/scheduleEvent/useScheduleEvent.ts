import { URL } from "@/app/constants/SiteUrl";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function useScheduleEvent() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [textArea, setTextArea] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const selectedTime = searchParams.get("selectedTime");
  const timezone = searchParams.get("timezone");
  const formatDate = searchParams.get("formatDate");
  // console.table({ selectedTime, timezone, formatDate });

  const handleSubmit = async () => {
    if (!name || !email || !textArea) {
      return toast.error("Please fill all required fields");
    }
    if (name.length < 3) {
      return toast.error("Please enter more than 3 characters in Name");
    }
    if (email.length < 3) {
      return toast.error("Please enter correct Email");
    }
    if (textArea.length < 10) {
      return toast.error("Please enter more than 10 characters in Details");
    }

    setIsLoading(true);
    try {
      const res = await axios.post(`${URL}/api/scheduleevent`, {
        name,
        email,
        textArea,
        selectedTime,
        timezone,
        formatDate,
      });

      toast.success("Event scheduled successfully");
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong in Event scheduling");
      setIsLoading(false);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    textArea,
    setTextArea,
    isLoading,
    handleSubmit,
    selectedTime,
    timezone,
    formatDate,
  };
}
