"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { assets } from "@/images/assets/assets.js";

const Sidebar = () => {
  const [expand, setExpand] = useState(false);
  const [first, setfirst] = useState(false);

  const chatHistory = [
    { title: "10 OS Interview Questions wit", date: "7 Days" },
    { title: "Greeting and Offer of Assistant", date: "30 Days" },
    { title: "Optimizing Hamming Distance", date: "" },
    { title: "Assisting with the image concept", date: "" },
    { title: "2025-03", date: "" },
    { title: "Resolving WebContainer Initial", date: "" },
    { title: "Installing Node.js with NVM on", date: "" },
    { title: "Resolving MongoDB Atlas Con", date: "" },
    { title: "Resolving Vercel Serverless Fu", date: "" },
    { title: "10 OS Interview Questions wit", date: "7 Days" },
    { title: "Greeting and Offer of Assistant", date: "30 Days" },
    { title: "Optimizing Hamming Distance", date: "" },
    { title: "Assisting with the image concept", date: "" },
    { title: "Assisting with the image concept", date: "" },
    { title: "Assisting with the image concept", date: "" },
    { title: "Assisting with the image concept", date: "" },
    { title: "Assisting with the image concept", date: "" },
  ];

  return (
    <div>
      <div
        className={`transition-all duration-300 ease-in-out bg-gradient-to-b from-[#1e1f24] to-[#2a2b30] h-screen flex flex-col justify-between pt-6 pb-6 ${
          expand ? "w-64" : "w-20"
        } shadow-2xl`} 
      >
        {/* Top Section */}
        <div className="flex flex-col items-center gap-4">
          <div
            className={`w-full relative group flex ${
              expand ? "flex-row justify-between" : "flex-col"
            } items-center cursor-pointer focus:outline-none px-4`}
          >
            <div className="flex flex-col items-center mb-4">
              {expand ? (
                <Image
                  src={assets.logo_text}
                  alt="DEEPSEEK Logo"
                  width={120}
                  height={40}
                  className="ml-2 transition-opacity duration-300 hover:brightness-110"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <Image
                    src={assets.logo_icon}
                    alt="Logo"
                    width={80} 
                    height={80}
                    className="object-contain opacity-95 hover:opacity-100 transition-all duration-300 hover:scale-105"
                  />
                </div>
              )}
            </div>

            <button>
              <div
                onClick={() => setExpand(!expand)}
                className="flex flex-col items-center"
              >
                <Image
                  src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
                  alt="Sidebar"
                  width={40}
                  height={40}
                  className="p-1 rounded-full mb-4 transition-all duration-300 ease-in-out hover:bg-gradient-to-tr from-[#2c2d30] to-[#44464a] hover:ring-2 hover:ring-blue-500 hover:scale-110"
                />
                {!expand ? (
                  <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex bg-black/90 text-white text-xs px-3 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-lg max-w-5xl break-words transition-opacity duration-200">
                    Sidebar
                  </div>
                ) : (
                  <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex bg-black/90 text-white text-xs px-3 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-lg max-w-5xl break-words transition-opacity duration-200">
                    Close Sidebar
                  </div>
                )}
              </div>
            </button>
          </div>

          {!expand && (
            <button className="relative group flex flex-col cursor-pointer items-center focus-outline-none">
              <div>
                <Image
                  src={assets.chat_icon}
                  alt="New Chat"
                  width={43}
                  height={40}
                  className="p-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-br from-[#2c2d30] to-[#44464a] hover:ring-2 hover:ring-blue-500 hover:scale-110 backdrop-blur-sm bg-opacity-50"
                />
                <div className="absolute w-[90px] left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex bg-black/90 text-white text-s px-3 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-lg max-w-5xl break-words transition-opacity duration-200">
                  New Chat
                </div>
              </div>
            </button>
          )}

          <div className="flex flex-col w-full">
            {expand && (
              <>
                
                <button
                  className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl px-4 py-2 mx-4 my-2 transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm bg-opacity-80"
                >
                  <Image
                    src={assets.chat_icon}
                    alt="New Chat"
                    width={25}
                    height={20}
                    className="mr-2"
                  />
                  <span className="text-sm font-semibold tracking-wide">
                    New Chat
                  </span>
                </button>

                {/* Chat History */}
                <div className="flex flex-col gap-1 px-4 max-h-[calc(100vh-300px)] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-[#2a2b30] scrollbar-thumb-rounded-full">
                  {chatHistory.map((chat, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-white text-sm py-2 px-3 rounded-xl hover:bg-[#2c2d30]/80 transition-all duration-200 cursor-pointer group backdrop-blur-sm bg-opacity-50 border border-gray-700/30"
                    >
                      <span className="truncate flex-1">{chat.title}</span>
                      {chat.date && (
                        <span className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          {chat.date}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-4">
          {/* Get App Button */}
          {expand ? (
            <button className="relative group flex items-center justify-between bg-transparent border border-blue-500/50 text-white rounded-full px-4 py-2 mx-4 transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400 active:scale-95 shadow-md backdrop-blur-sm bg-opacity-50">
              <div className="flex items-center">
                <Image
                  src={assets.phone_icon}
                  alt="Phone"
                  width={28}
                  height={20}
                  className="mr-2"
                />
                <span className="text-sm font-semibold tracking-wide">
                  Get App
                </span>
              </div>
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs rounded-full px-2 py-1 ml-2">
                NEW
              </span>
              <div className="absolute w-[140px] left-0 ml-3 bottom-0 -translate-y-1/3 hidden group-hover:flex bg-black/90 text-white px-3 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-lg transition-opacity duration-200">
                <Image
                  src={assets.qrcode}
                  alt="QR Code"
                  width={150}
                  height={200}
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </button>
          ) : (
            <button className="relative group flex cursor-pointer flex-col items-center focus-outline-none">
              <Image
                src={assets.phone_icon}
                alt="Phone"
                width={45}
                height={28}
                className="p-2 rounded-xl transition-all duration-300 ease-in-out hover:bg-gradient-to-br from-[#2c2d30] to-[#44464a] hover:ring-2 hover:ring-blue-500 hover:scale-110 backdrop-blur-sm bg-opacity-50"
              />
              <div className="absolute w-[140px] left-0 ml-3 bottom-0 -translate-y-1/3 hidden group-hover:flex bg-black/90 text-white px-3 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-lg transition-opacity duration-200">
                <Image
                  src={assets.qrcode}
                  alt="QR Code"
                  width={150}
                  height={200}
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </button>
          )}

          
          {expand ? (
            <div className="flex items-center px-4 py-2 rounded-xl hover:bg-[#2c2d30]/80 transition-all duration-200 cursor-pointer backdrop-blur-sm bg-opacity-50 border border-gray-700/30">
              <Image
                src={assets.profile_icon}
                alt="Profile"
                width={40}
                height={28}
                className="cursor-pointer opacity-90 hover:opacity-100"
              />
              <span className="ml-2 text-white text-sm font-semibold tracking-wide">
                My Profile
              </span>
            </div>
          ) : (
            <div className="relative group flex flex-col items-center">
              <Image
                src={assets.profile_icon}
                alt="Profile"
                width={35}
                height={28}
                className="cursor-pointer opacity-90 hover:opacity-100 p-2 rounded-xl transition-all duration-300 hover:bg-gradient-to-br from-[#2c2d30] to-[#44464a] hover:ring-2 hover:ring-blue-500 hover:scale-110 backdrop-blur-sm bg-opacity-50"
              />
              <div className="absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-black/90 px-2 py-1 rounded shadow-lg transition-opacity duration-200">
                Profile
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;