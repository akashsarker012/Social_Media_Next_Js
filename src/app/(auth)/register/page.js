"use client";
import Label from "@/components/label";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import {toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Register() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    occupation: "",
    email: "",
    password: "",
    profile_pic: "",
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputFileRef = useRef();

  const handleOpenFileUploader = () => {
    inputFileRef.current.click();
  };

  const handleProfilePic = (e) => {
    const file = e.target.files[0];
    setData((prev) => ({
      ...prev,
      profile_pic: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const formData = new FormData();
    formData.set("firstName", data.firstName);
    formData.set("lastName", data.lastName);
    formData.set("location", data.location);
    formData.set("occupation", data.occupation);
    formData.set("email", data.email);
    formData.set("password", data.password);
    formData.set("profile_pic", data.profile_pic);

    const response = await axios.post("/api/register", formData);
    toast(response.data.message);

    if (response.data.success) {
      setData({
        firstName: "",
        lastName: "",
        location: "",
        occupation: "",
        email: "",
        password: "",
        profile_pic: "",
      });
      router.push("/login");
    }

    console.log("res", response);
  };

  return (
    <div className="flex mx-auto justify-center px-6 py-12 bg-gray-400 dark:bg-gray-900">
      <div className="w-full max-w-3xl lg:w-8/12 bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
        <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
          Create an Account
        </h3>
        <form onSubmit={handleSubmit} className="p-6 bg-gray-800 rounded">
          <div className="mb-4 flex justify-between w-full gap-3">
            <div className="mb-4 md:mr-2 md:mb-0 w-[50%]">
              <Label title={"First Name"} />
              <input
                className="w-full pl-3 py-2 text-sm leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline bg-transparent"
                onChange={handleOnchange}
                value={data.firstName}
                type="text"
                name="firstName"
                placeholder="First Name"
                disabled={loading}
              />
            </div>
            <div className="md:ml-2 w-[50%]">
              <Label title={"Last Name"} />
              <input
                className="w-full px-3 py-2 text-sm leading-tight bg-transparent text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                onChange={handleOnchange}
                value={data.lastName}
                type="text"
                name="lastName"
                placeholder="Last Name"
                disabled={loading} />
            </div>
          </div>
          <div className="mb-4">
            <Label title={"Occupation"} />
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight bg-transparent text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              onChange={handleOnchange}
              value={data.occupation}
              type="text"
              name="occupation"
              disabled={loading}
              placeholder="Occupation" />
          </div>
          <div className="mb-4">
            <Label title={"Location"} />
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight bg-transparent text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              onChange={handleOnchange}
              value={data.location}
              type="text"
              name="location"
              disabled={loading}
              placeholder="Location" />
          </div>
          <div className="mb-4">
            <Label title={"Email"} />
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight bg-transparent text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              onChange={handleOnchange}
              value={data.email}
              name="email"
              disabled={loading}
            />
          </div>
          <div className="mb-4">
            <Label title={"Password"} />
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight bg-transparent text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              onChange={handleOnchange}
              value={data.password}
              name="password"
              disabled={loading} />
          </div>
          <div className="mb-4">
            <div className="flex flex-col gap-1">
              <Label title={"Profile Pic"}></Label>
              <div
                className="h-14 bg-slate-100 flex justify-center items-center cursor-pointer border hover:border-blue-700"
                onClick={handleOpenFileUploader} >
                <input
                  type="file"
                  id="profile_pic"
                  className="hidden"
                  ref={inputFileRef}
                  onChange={handleProfilePic} />

                {Boolean(data.profile_pic?.name) ? (
                  <p>{data.profile_pic?.name}</p>
                ) : (
                  <div className="flex  gap-3">
                    <MdOutlineCloudUpload />
                    <p className="text-sm">Upload profile image</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mb-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
              type="submit" >
              Register Account
            </button>
          </div>
          <hr className="mb-3 border-t" />
          <div className="text-center">
            <Link
              className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
              href="/"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="text-center">
            <Link
              className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
              href={"/login"}
            >
              Already have an account? Login!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
