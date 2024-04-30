"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import InputField from "@/app/(components)/Input";
import Button from "@/app/(components)/Button";
import cornerimage from "@/app/(asset)/images/avilibility_images/Topcornerimage.svg";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { LoadingSpinner } from "baseui/button/styled-components";
import Link from "next/link";

export default function scheduleEvent() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [textArea, setTextArea] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const selectedTime = searchParams.get("selectedTime");
  const timezone = searchParams.get("timezone");
  const formatDate = searchParams.get("formatDate");
  console.table({ selectedTime, timezone, formatDate });

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
      const res = await axios.post("/api/scheduleevent", {
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

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="w-[1060px] h-[673px] flex shadow-2xl">
            {/* 1st section starts here */}

            <div className="w-[370px] h-[673px]  border-r-2 border-gray-200 p-8 relative">
              <div className="font-bold my-2 text-gray-500">
                Muhammad Ali Raza
              </div>
              <div className="font-bold text-2xl">30 Minute Meeting </div>
              <div className="flex gap-2 items-center mt-5">
                <div className="flex  items-center gap-2 text-gray-500">
                  <FaRegClock />
                  30 min
                </div>
              </div>
              <div className="flex gap-2 items-center mt-5">
                <div className="flex  items-center gap-2 text-gray-500">
                  <MdEvent className="w-4 h-6" />
                  {selectedTime}, {formatDate}
                </div>
              </div>
              <div className="flex gap-2 items-center mt-5">
                <div className="flex gap-2 items-center text-gray-500">
                  <GiWorld />
                  {timezone}
                </div>
              </div>

              <div className="flex gap-24 absolute bottom-6">
                <div className="text-sm text-blue-600">Cookie settings</div>
                <div className="text-sm">Report abuse</div>
              </div>
            </div>

            {/* 2nd section ends here */}
            <div className="w-[413px] h-[673px] ml-5">
              <div className="font-bold text-[18px] relative top-5 ">
                Enter Details
              </div>
              <div className="flex gap-2 items-center mt-10  font-bold">
                Name*
              </div>
              <div className="rounded-3xl mt-3">
                <InputField
                  name="Name"
                  placeholder="Enter Name"
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  id="Name"
                />
              </div>
              <div className="flex gap-2 items-center mt-5 font-bold">
                Email*
              </div>
              <div className="rounded-3xl mt-3">
                <InputField
                  name="Email"
                  placeholder="Enter Email"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  id="Email"
                />
              </div>
              <div className="mt-5 font-bold">
                Please share anything that will help prepare for our meeting.
              </div>
              <div className="textarea">
                <textarea
                  className="w-full h-[150px] mt-3 rounded-md border-2 border-gray-400 placeholder:ml-5 text-ml-10"
                  placeholder="Enter Details"
                  onChange={(e) => {
                    setTextArea(e.target.value);
                  }}
                  value={textArea}
                />
                <div className="text-sm text-gray-500 mt-5">
                  By procedding, you confirm that you have read and agree to our{" "}
                  <span className="text-blue-700 font-bold">
                    Calendly's Terms of use
                  </span>
                  and{" "}
                  <span className="text-blue-700 font-bold text-sm">
                    Privacy Policy
                  </span>
                </div>
                <Link
                  href={{
                    pathname: "/scheduled",
                    query: {
                      selectedTime,
                      timezone,
                      formatDate,
                    },
                  }}
                >
                  <div className="mt-7">
                    {isLoading && <LoadingSpinner />}
                    <Button
                      loading={isLoading}
                      name="Schedule Event"
                      onClick={() => {
                        handleSubmit();
                      }}
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* 3rd section starts here */}

            <div className="w-[277px] h-[673px] bg-white ">
              <div className="flex justify-end items-center relative top-[-6px] left-[7px]">
                <Image src={cornerimage} alt="cornerimage" />
              </div>
              <div className="text-black relative bottom-10 ml-2 text-lg"></div>

              {/* write code upper from this div */}
            </div>
            {/* 3rd section ends here */}
          </div>
        </div>
      </div>
    </>
  );
}
