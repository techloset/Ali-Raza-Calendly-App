"use client";
import React, { useState } from "react";
import SignupLogo from "../../(asset)/images/auth_images/logo-calendly.svg";
import Dontworry from "../../(asset)/images/avilibility_images/Dontworry.svg";
import Image from "next/image";
import Bookmarkdesign from "../../(asset)/images/avilibility_images/bookmark_and_plus.png";
import loadingImg from "../../(asset)/images/avilibility_images/Progressbar.png";
import Button from "@/app/(components)/Button";
export default function Availibility() {
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:30");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleDayChange = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 60) {
        let hourString = hour.toString().padStart(2, "0");
        let minuteString = minute.toString().padStart(2, "0");
        let time = `${hourString}:${minuteString}`;
        if (hour > 11) {
          time += " PM";
        } else {
          time += " AM";
        }
        slots.push(time);
      }
    }
    return slots;
  };

  const handleStartTimeChange = (event: any) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event: any) => {
    setEndTime(event.target.value);
  };

  return (
    <>
      <div className="pb-10 mb-10">
        <div className="flex justify-center ">
          <div className="flex justify-center mt-5">
            <Image src={SignupLogo} alt="logo" />
          </div>
        </div>

        <div className="max-w-[645px] border-2 pb-8 mt-8 rounded-lg mx-auto">
          <div className="flex justify-center ">
            <div className="flex justify-center mt-5  w-[645px]  ">
              <div className="mr-10">
                <div className="font-bold pt-8 pb-6 text-[18px]">
                  Set your availability
                </div>
                <div className="text-[15px]">
                  Let Calendly know when you're typically available to <br />
                  accept meetings.
                </div>
              </div>
              <div className="">
                <Image
                  src={Bookmarkdesign}
                  className="w-[185px] "
                  alt="Bookmarkdesign"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mx-6">
            <div className="w-[645px] p-4">
              <div className="mb-4 text-xl font-bold">Available hours</div>
              <div className=" flex justify-between">
                <div className="flex justify-center">
                  <select
                    className=" mr-4 w-[278px] h-14 rounded-xl pl-3 border-2 cursor-pointer"
                    value={startTime}
                    onChange={handleStartTimeChange}
                  >
                    {generateTimeSlots().map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <span></span>
                  <select
                    className="ml-4 w-[278px] h-14 rounded-xl p-4 border-2 cursor-pointer"
                    value={endTime}
                    onChange={handleEndTimeChange}
                  >
                    {generateTimeSlots().map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className=" ">
              <div className="mb-4 text-xl font-bold">Available Days</div>
              <div className=" flex justify-between border-2 border-l-[4px] rounded-lg">
                {days.map((day) => (
                  <div
                    key={day}
                    className="cursor-pointer h-16 gap-2 flex flex-col border-r-2 p-2 w-[84px] text-[11.5px] items-center justify-center"
                    onClick={() => handleDayChange(day)}
                  >
                    <input
                      type="checkbox"
                      className="flex h-5 w-4 rounded-xl p-4 border-2 cursor-pointer"
                      value={day}
                      checked={selectedDays.includes(day)}
                    />
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center mt-10">
            <Image
              src={Dontworry}
              alt="AvailibilityImage"
              className="w-5 h-5"
            />
            <div className="text-[15px] ml-2">
              Don't worry! You'll be able to further customize your availability
              later on.
            </div>
          </div>
        </div>

        <div className="flex justify-evenly items-center mt-6 mx-36">
          <div>
            <Image src={loadingImg} alt="" className="w-[100px] h-[10px]" />
          </div>
          <div className="flex justify-evenly items-center gap-5">
            <div className="">
              <div className="h-[44px] w-auto border-[1px] text-black flex items-center px-4 rounded-3xl cursor-pointer">
                Set up later
              </div>
            </div>
            <div className="">
              <Button name="Continue" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
