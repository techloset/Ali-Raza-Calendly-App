import React from "react";
import SignupLogo from "../../(asset)/images/auth_images/logo-calendly.svg";
import Image from "next/image";
import Bookmarkdesign from "../../(asset)/images/avilibility_images/bookmark_and_plus.png";
export default function Availibility() {
  return (
    <>
      <div className="border-2">
        <div className="flex justify-center ">
          <div className="flex justify-center mt-5">
            <Image src={SignupLogo} alt="logo" />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex justify-center mt-5 border-2 border-red-500 w-[645px]  ">
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
        <div className="w-full flex justify-center">
          <div className="border-2 border-green-500 w-[645px]  ">
            <div>Available hours</div>
            <div className="w-full flex justify-between">
              <div className="">
                <select className="h-[44px] w-[278px]">
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>
              </div>
              <div className="">
                <select className=" ">
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
