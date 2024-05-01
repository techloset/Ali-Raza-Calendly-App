"use client";
import React from "react";
import useScheduled from "./useScheduled";
import {
  Image,
  CiShare1,
  LuUser2,
  GrSchedule,
  BiWorld,
  IoCheckmarkCircleSharp,
  cornerimage,
} from "@/app/constants/Images";
export default function scheduled() {
  const { selectedTime, timezone, formatDate } = useScheduled();

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="w-[1060px] h-[573px] flex shadow-2xl">
            {/* 1st section starts here */}

            <div className="w-[270px] h-[573px] p-8 relative">
              <div className="flex gap-24 absolute bottom-6">
                <div className="text-sm  text-blue-600">Cookie settings</div>
              </div>
            </div>

            {/* 2nd section ends here */}
            <div className="w-full h-[573px]  flex items-center flex-col">
              <div className="flex justify-center items-center gap-5 mt-10">
                <IoCheckmarkCircleSharp className="text-green-500 h-8 w-8" />
                <h1 className="text-2xl font-bold">You are Scheduled</h1>
              </div>
              <div className="text-center w-full mt-5">
                A calender event has been send to your email address.
              </div>

              <div className="flex items-center justify-center gap-2 border-2 cursor-pointer rounded-3xl text-sm h-11 w-[170px] mt-6 ml-4 p-2">
                <div className="">Open Invitaion</div>
                <CiShare1 className="h-6 w-6" />
              </div>
              <div className="text-center mt-8 border-2 border-gary-300 rounded-md p-5">
                <div className=" font-bold text-start">30 Minute Meeting</div>
                <div className="flex items-center gap-2 mt-3">
                  <LuUser2 />
                  <div>Muhammad Ali Raza</div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <GrSchedule />
                  <div className="text-sm">
                    {selectedTime} {formatDate}
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <BiWorld />
                  <div className="text-sm">{timezone}</div>
                </div>
              </div>
            </div>

            {/* 3rd section starts here */}

            <div className="w-[377px] h-[573px] bg-white ">
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
