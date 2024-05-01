import { useState } from "react";

interface FormData {
  fullname: string;
  message: string;
  language: string;
  dateFormate: string;
  timeFormate: string;
  country: string;
  timeZone: string;
}
const initialState = {
  fullname: "",
  message: "",
  language: "",
  dateFormate: "",
  timeFormate: "",
  country: "",
  timeZone: "",
};
export const languages = ["english", "urdu", "punjabi", "roman"];

export default function useProfile() {
  const [loading, setisLoading] = useState(false);
  const [state, setstate] = useState(initialState);
  const handelChange = (e: any) => {
    setstate((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    setisLoading(true);
    console.log(state);
    // await axios.post(`${URL}/api/profile`, {
    //   fullname: value.fullname,
    // })
    //   .then(function (response) {
    //     console.log(response);
    //     toast.success(`${response.data.message}`)
    //     reset()
    //     setisLoading(false)

    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     toast.error(`${error.response.data.message}`)
    //   });
    setisLoading(false);
  };

  return {
    state,
    handelChange,
    handleSubmit,
    loading,
    languages,
  };
}
