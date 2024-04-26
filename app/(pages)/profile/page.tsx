"use client";

import React, { useState } from "react";
import Input from "@/app/(components)/Input";
import TextareaInput from "@/app/(components)/TextareaInput";
import DropDown from "@/app/(components)/Dropdown";
import Image from "next/image";
import Button from "@/app/(components)/Button";
import TransparentButton from "@/app/(components)/TransparentButton";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiInformationLine } from "react-icons/ri";

export const languages = ["english", "urdu", "punjabi", "roman"];
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

export default function Profile() {
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

  return (
    <>
      <div className="flex  items-center justify-end  mr-8 h-[72px]">
        <div className="flex items-center  gap-1 cursor-pointer">
          <div className="text-lg font-bold h-9 w-9 rounded-full bg-[#0069FF] "></div>
          <IoMdArrowDropdown />
        </div>
      </div>
      <form className="w-[100%] sm:w-[75%] pb-20">
        <div className="text-gray-500 font-semibold text-xl mb-4 pt-5 ">
          account details
        </div>
        <p className="text-black font-bold text-5xl mb-7">Profile</p>
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-12 mb-5">
          <Image
            className=" h-32 w-32 rounded-full ring-2 ring-white"
            src=""
            alt=""
          />
          <div className="text-center sm:text-start">
            <button className="text-black font-normal text-lg bg-white-default border-2 border-black rounded-[40px]  px-3 py-[6px] mb-2">
              Upload picture
            </button>
            <div className="text-lightBlack font-normal text-sm">
              JPG, GIF or PNG Max size of 5MB
            </div>
          </div>
        </div>
        <div>
          <div className="mb-7 w-96">
            <div className="flex items-center gap-2">
              <div className="text-black font-semibold text-lg mb-2">Name</div>
              <RiInformationLine className="text-gray-500 mb-2 h-5 w-5" />
            </div>
            <Input
              id=""
              type={"text"}
              name={"fullname"}
              value={state.fullname}
              onChange={handelChange}
              placeholder={""}
            />
          </div>
          <div className="mb-7 w-96">
            <TextareaInput
              label={"Welcome message"}
              name={"message"}
              value={state.message}
              onChange={handelChange}
              placeholder={"Type message here."}
            />
          </div>
          <div className="mb-7 w-96">
            <DropDown
              width={"w-full"}
              label={"Language"}
              name={"language"}
              value={state.language}
              onChange={handelChange}
              options={languages}
              defaultOption={"Choose language formate"}
            />
          </div>

          <div className=" flex flex-wrap sm:flex-nowrap justify-between items-center gap-6 mb-7 w-96">
            <div className="w-full">
              <DropDown
                width={"w-full"}
                label={"Date Formate"}
                name={"dateFormate"}
                value={state.dateFormate}
                onChange={handelChange}
                options={languages}
                defaultOption={"Choose date format"}
              />
            </div>
            <div className="w-full">
              <DropDown
                width={"w-full"}
                label={"Time Formate"}
                name={"timeFormate"}
                value={state.timeFormate}
                onChange={handelChange}
                options={languages}
                defaultOption={"Choose time format"}
              />
            </div>
          </div>
          <div className="mb-7 w-96">
            <DropDown
              width={"w-full"}
              label={"Country"}
              name={"country"}
              value={state.country}
              onChange={handelChange}
              options={languages}
              defaultOption={"Choose country"}
            />
          </div>
          <div className="w-96">
            <DropDown
              width={"w-full"}
              label={"Time Zone"}
              name={"timeZone"}
              value={state.timeZone}
              onChange={handelChange}
              options={languages}
              defaultOption={"Choose time zone"}
            />
          </div>
          <div className="w-[70%] sm:w-[440px] mt-10 flex gap-4">
            <Button onClick={handleSubmit} name="save Chnges" />
            <TransparentButton
              onClick={() => {}}
              label="Cancel"
              icon1={<></>}
              icon2={<></>}
            />
          </div>
        </div>
      </form>
    </>
  );
}
