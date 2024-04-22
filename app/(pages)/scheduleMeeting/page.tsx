"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { FaRegClock } from "react-icons/fa";
import "react-calendar/dist/Calendar.css";
import { GrTroubleshoot } from "react-icons/gr";
import cornerimage from "@/app/(asset)/images/avilibility_images/Topcornerimage.svg";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
export default function ScheduleMeeting() {
  const [value, onChange] = useState<Value>(new Date());
  const [timezone, setTimezone] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [showSecondDiv, setShowSecondDiv] = useState([false, false]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (value: any) => {
    setSelectedDate(value);
  };
  console.log("selectedDate", selectedDate);
  const handleChange = (event: any) => {
    setTimezone(event.target.value);
  };

  const formatDate = (date: any) => {
    const options = { weekday: "long", month: "long", day: "2-digit" };
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    if (timezone) {
      const interval = setInterval(() => {
        const time = new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: timezone,
        });
        setCurrentTime(time);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [timezone]);

  // Array of timezone data with country and timezone information
  const timezones = [
    { country: "United States", timezone: "America/New_York" },
    { country: "United Kingdom", timezone: "Europe/London" },
    { country: "Japan", timezone: "Asia/Tokyo" },
    { country: "India", timezone: "Asia/Kolkata" },
    { country: "China", timezone: "Asia/Shanghai" },
    { country: "South Korea", timezone: "Asia/Seoul" },
    { country: "Pakistan", timezone: "Asia/Karachi" },
    { country: "Indonesia", timezone: "Asia/Jakarta" },
    { country: "Bangladesh", timezone: "Asia/Dhaka" },
    { country: "Philippines", timezone: "Asia/Manila" },
    { country: "Vietnam", timezone: "Asia/Ho_Chi_Minh" },
    { country: "Thailand", timezone: "Asia/Bangkok" },
    { country: "Taiwan", timezone: "Asia/Taipei" },
    { country: "Saudi Arabia", timezone: "Asia/Riyadh" },
    { country: "Singapore", timezone: "Asia/Singapore" },
    { country: "Malaysia", timezone: "Asia/Kuala_Lumpur" },
    { country: "Turkey", timezone: "Europe/Istanbul" },
    { country: "Russia", timezone: "Europe/Moscow" },
    { country: "Iran", timezone: "Asia/Tehran" },
    { country: "UAE", timezone: "Asia/Dubai" },
  ];

  const handleFirstDivClick = (index: any) => {
    setShowSecondDiv((prev) =>
      prev.map((value, i) => (i === index ? !value : false))
    );
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="w-[1060px] h-[673px] flex bg-slate-400 ">
            <div className="w-[370px] h-[673px] bg-blue-500 border-2 border-red-500 p-8">
              <div className="font-bold my-2 text-gray-500">
                Muhammad Ali Raza
              </div>
              <div className="font-bold text-2xl">30 Minute Meeting </div>
              <div>
                <div className="flex gap-2 items-center mt-5">
                  <FaRegClock className="h-5 w-5 text-gray-500" />
                  <div className="text-gray-500">30 min</div>
                </div>
              </div>
            </div>
            <div className="w-[413px] h-[673px] bg-red-500 border-2 border-yellow-500">
              <div className="font-bold text-[18px] relative top-5 left-5">
                Select a Date and Time
              </div>
              <div className=" flex justify-center items-center mt-14">
                <Calendar
                  value={value}
                  className=""
                  onChange={handleDateChange}
                />
              </div>

              <div className="ml-4 mt-5">
                <div className="mb-2 font-bold">Time Zone</div>
                <div>
                  <select
                    id="timezone"
                    value={timezone}
                    onChange={handleChange}
                    className=""
                  >
                    <option value="">Select a timezone</option>

                    {timezones.map((tz, index) => (
                      <>
                        <option key={index} value={tz.timezone}>
                          {tz.country}, (
                          {new Date().toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                            timeZone: tz.timezone,
                          })}
                          )
                        </option>
                      </>
                    ))}
                  </select>
                </div>
              </div>

              {/* Troubleshoot code  */}
              <div className="flex items-end mt-14">
                <div className="flex items-center justify-center gap-2 border-2 border-black rounded-3xl text-sm h-11 w-[150px] mt-9 ml-4">
                  <GrTroubleshoot />
                  <div className="">TroubleShot</div>
                </div>
              </div>
            </div>

            {/* 3rd section starts here */}

            <div className="w-[277px] h-[673px] bg-white border-2 border-black">
              <div className="flex justify-end items-center relative top-[-6px] left-[7px]">
                <Image
                  src={cornerimage}
                  alt="Dontworry"
                  className="  flex justify-center items-"
                />
              </div>
              <div className="text-black relative bottom-10 ml-2 text-lg">
                <div className="relative top-5">{formatDate(selectedDate)}</div>
              </div>

              {/* <div className="flex justify-center gap-2 mt-10 flex-col overflow-auto">
                
                {[0, 1].map((index) => (
                  <div key={index}>
                    <div
                      className="flex justify-center border-2 border-blue-500 p-5 text-blue-600 mx-2 rounded-lg cursor-pointer"
                      onClick={() => handleFirstDivClick(index)}
                    >
                      9:00
                    </div>
                   
                    {showSecondDiv[index] && (
                      <div className="flex justify-center border-2 p-5 bg-green-200 mx-2 rounded-lg relative bottom-[67px]">
                        <div className="bg-red-500 absolute top-[10px]">
                          hello1
                        </div>
                        <div className="bg-yellow-500 absolute top-[10px]">
                          hello2
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div> */}

              {/* write code upper from this div */}
            </div>
            {/* 3rd section ends here */}
          </div>
        </div>
      </div>
    </>
  );
}
