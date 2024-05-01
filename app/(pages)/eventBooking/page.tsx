"use client";
import React from "react";
import "react-calendar/dist/Calendar.css";
import useEvnetBooking from "./useEvnetBooking";
import {
  Calendar,
  FaRegClock,
  GrTroubleshoot,
  cornerimage,
  Image,
  Link,
} from "@/app/constants/Images";
export default function ScheduleMeeting() {
  const {
    value,
    onChange,
    timezone,
    timezones,
    timeSlots,
    isVisible,
    handleToggle,
    handleDateChange,
    handleChange,
    selectedDate,
    selectedTime,
    isHidden,
    setIsHidden,
    formatDate,
    setCurrentTime,
    senddata,
    setSelectedTime,
  } = useEvnetBooking();

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div>
          <div className="w-[1060px] h-[673px] flex shadow-2xl">
            <div className="w-[370px] h-[673px]  border-r-2 border-gray-200 p-8">
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
            <div className="w-[413px] h-[673px] ">
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

            <div className="w-[277px] h-[673px] bg-white ">
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

              <div className="w-56 flex flex-col gap-2">
                {timeSlots.map((timeSlot, index) => (
                  <div key={index}>
                    <div
                      className={`flex justify-between items-center ${
                        isVisible[index] ? "" : "hidden"
                      }`}
                      onClick={() => handleToggle(index)}
                    >
                      <button
                        className="w-full flex justify-center border-2 border-blue-500 p-5 text-blue-600 mx-2 rounded-lg cursor-pointer"
                        onClick={() =>
                          setSelectedTime(timeSlot.start + " - " + timeSlot.end)
                        }
                      >
                        {timeSlot.start}
                        {isHidden ? null : (
                          <span className="display-none ">{timeSlot.end}</span>
                        )}
                      </button>
                    </div>
                    <div
                      className={`flex justify-between items-center gap-2 mx-2 ${
                        isVisible[index] ? "hidden" : ""
                      }`}
                    >
                      <button className="w-1/2 flex justify-center border-2 border-transparent p-5 text-white bg-gray-600 rounded-lg cursor-pointer">
                        {timeSlot.start}
                      </button>
                      <Link
                        href={{
                          pathname: "/scheduleEvent",
                          query: senddata as any,
                        }}
                        className="w-1/2 flex justify-center border-2 border-transparent p-5 text-white bg-blue-600 rounded-lg cursor-pointer"
                      >
                        <button className="">Next</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* write code upper from this div */}
            </div>
            {/* 3rd section ends here */}
          </div>
        </div>
      </div>
    </>
  );
}
