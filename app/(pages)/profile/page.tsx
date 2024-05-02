"use client";
import React, { useState } from "react";
import profile from "@/app/(asset)/images/profile-images/profile.png";
import {
  IoMdArrowDropdown,
  Input,
  TextareaInput,
  DropDown,
  RiInformationLine,
  Image,
  Button,
  TransparentButton,
} from "@/app/constants/Images";
import useProfile, { languages } from "./useProfile";
export default function Profile() {
  const {
    name,
    welcome,
    language,
    dateFormate,
    timeFormate,
    country,
    timeZone,
    handelChange,
    handlewelcome,
    handelLanguage,
    handelDateFormate,
    handelTimeFormate,
    handelCountry,
    handelTimeZone,
    loading,
    setLoading,
    handleImageChange,
    handleProfileImageClick,
    image,
    errorMessage,
    setErrorMessage,
    handleSubmit,
  } = useProfile();

  // const handleFileChange = (event: any) => {
  //   const file = event.target.files[0];

  //   // Check if a file is selected
  //   if (file) {
  //     // Check file type
  //     const fileType = file.type;
  //     if (
  //       !["image/jpeg", "image/jpg", "image/png", "image/svg+xml"].includes(
  //         fileType
  //       )
  //     ) {
  //       setErrorMessage("Only JPG, PNG, and SVG files are allowed.");
  //       return;
  //     }

  //     // Check file size
  //     const fileSize = file.size / 1024 / 1024; // Convert to MB
  //     if (fileSize > 5) {
  //       setErrorMessage("File size exceeds the maximum limit of 5MB.");
  //       return;
  //     }

  //     // Set the image preview
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setImage(reader.result as any);
  //       setErrorMessage("");
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     // Clear the image and error message if no file is selected
  //     setImage(null);
  //     setErrorMessage("");
  //   }
  // };

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
          <div className="flex flex-row-reverse items-center gap-10">
            <div>
              <input
                type="file"
                name="image"
                id="image"
                accept=".jpg,.jpeg,.png,.svg"
                className=""
                onChange={handleImageChange}
              />
              <div className="mt-4">
                jpg, jpeg, png and svg. Max size is 5 MB
              </div>
            </div>

            <div
              className="text-center sm:text-start cursor-pointer"
              onClick={handleProfileImageClick}
            >
              {image ? (
                <img
                  src={image}
                  alt="Uploaded Image"
                  className="w-32 h-32 rounded-full"
                />
              ) : (
                <div className="w-32 h-32 rounded-full   flex items-center justify-center">
                  <Image
                    src={profile}
                    alt="Profile Image"
                    className="w-36  rounded-full"
                  />
                </div>
              )}
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
              name={"name"}
              value={name}
              onChange={handelChange}
              placeholder={""}
            />
          </div>
          <div className="mb-7 w-96">
            <TextareaInput
              label={"Welcome message"}
              name={"welcome"}
              value={welcome}
              onChange={handlewelcome}
              placeholder={"Type message here."}
            />
          </div>
          <div className="mb-7 w-96">
            <DropDown
              width={"w-full"}
              label={"Language"}
              name={"language"}
              value={language}
              onChange={handelLanguage}
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
                value={dateFormate}
                onChange={handelDateFormate}
                options={languages}
                defaultOption={"Choose date format"}
              />
            </div>
            <div className="w-full">
              <DropDown
                width={"w-full"}
                label={"Time Formate"}
                name={"timeFormate"}
                value={timeFormate}
                onChange={handelTimeFormate}
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
              value={country}
              onChange={handelCountry}
              options={languages}
              defaultOption={"Choose country"}
            />
          </div>
          <div className="w-96">
            <DropDown
              width={"w-full"}
              label={"Time Zone"}
              name={"timeZone"}
              value={timeZone}
              onChange={handelTimeZone}
              options={languages}
              defaultOption={"Choose time zone"}
            />
          </div>
          <div className="w-[70%] sm:w-[440px] mt-10 flex gap-4">
            <Button
              onClick={() => {
                handleSubmit();
              }}
              name="save Chnges"
              loading={loading}
            />
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
