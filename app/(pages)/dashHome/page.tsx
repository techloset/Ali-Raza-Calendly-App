"use client";
import TransparentButton from "@/app/(components)/TransparentButton";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiExport } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { FaCaretRight } from "react-icons/fa";
import axios from "axios";

export default function DashHome() {
  const [data, setData] = useState<any>("");

  const res = async () => {
    try {
      const res = await axios.get("/api/scheduleevent");
      setData(res.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    res();
    console.log("res", res);
  }, []);

  return (
    <>
      <div className="flex items-center justify-end  mr-6 h-[72px]">
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="text-lg font-bold h-9 w-9 rounded-full bg-[#0069FF] "></div>
          <IoMdArrowDropdown />
        </div>
      </div>

      <div className="flex items-center text-3xl font-bold h-[71px]  mr-8">
        Schedule event
      </div>
      <div className="mr-8 mt-8 flex justify-between items-center ">
        <div className="h-[46px] w-[151px] flex items-center justify-center border-2 rounded-lg cursor-pointer bg-white">
          <div>My Calendly</div>
          <IoMdArrowDropdown />
        </div>
        <div className="">Displaying 1 of 1 Events</div>
      </div>
      <div className=" mt-8 rounded-lg border-2 mr-8">
        <div className="felx justify-between items-end p-1  h-16 bg-white rounded-t-lg">
          <div className="flex justify-between items-center bg-white  h-14 mx-5  ">
            <div className="flex items-center gap-x-5 h-14  ">
              <div className="cursor-pointer px-3 py-5 hover:border-b-4 hover:border-blue-500">
                Upcoming
              </div>
              <div className="cursor-pointer px-3 py-5 hover:border-b-4 hover:border-blue-500">
                Pending
              </div>
              <div className="cursor-pointer px-3 py-5 hover:border-b-4 hover:border-blue-500">
                Past
              </div>
              <div className="flex justify-center items-center cursor-pointer px-3 py-5 hover:border-b-4 hover:border-blue-500">
                Date Range
                <IoMdArrowDropdown />
              </div>
            </div>
            <div className="flex justify-end items-center gap-3">
              <TransparentButton
                icon1={<CiExport className="w-5 h-5 mx-2" />}
                label="Export"
                icon2={<></>}
                onClick={() => {}}
              />
              <TransparentButton
                icon1={<IoFilter className="w-5 h-5 mx-2" />}
                label="Filter"
                icon2={<IoMdArrowDropdown className="w-5 h-6 mx-2" />}
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
        <div className="h-12 mx-5 mt-5 font-bold">
          Wednesday, 27th March 2024
        </div>
        {/* Meeting data starts here */}
        <div className="flex flex-col overflow-auto ">
          {/* put data of the meeting here   */}
          <div>
            {data &&
              data.map((evnt: any, i: number) => (
                <div
                  key={i}
                  className="flex border-b-2 bg-white min-h-16 h-20 justify-between pr-4 items-center"
                >
                  <div className="flex items-center px-5 gap-3  h-full">
                    <div className="h-5 w-5 rounded-full bg-purple-600"></div>
                    <div className="">{evnt.selectedTime}</div>
                  </div>
                  <div className="">
                    <div className="">{evnt.name}</div>
                    <div className="">
                      Event type{" "}
                      <span className="font-bold">{evnt.eventType}</span>
                    </div>
                  </div>
                  <div className="">1 host | 0 participant</div>
                  <div className="flex gap-2 justify-center items-center">
                    <FaCaretRight />
                    Details
                  </div>
                </div>
              ))}
          </div>

          <div className="flex justify-center items-center min-h-9 h-14 bg-white rounded-b-xl">
            You've reached the end of the list
          </div>
        </div>
      </div>
    </>
  );
}
