"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { assets } from "@/images/assets/assets.js";

const Sidebar = () => {
  const [expand, setExpand] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);

  // Sample chat history data to display when sidebar is expanded
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
  ];

  return (
    <div>
      {!hideSidebar && (
        <div
          className={`transition-all duration-300 ease-in-out bg-[#1e1f24] h-screen flex flex-col justify-between pt-6 pb-6 ${
            expand ? "w-64" : "w-20"
          } shadow-lg`} // Added shadow for depth
        >
          {/* Top Section */}
          <div className="flex flex-col items-center gap-4">
            {/* Logo and Toggle Button */}
            <div className="w-full relative group flex justify-between cursor-pointer items-center focus:outline-none px-4">
              <div className="flex flex-row items-center justify-center mb-4">
                {/* Show logo_icon when collapsed, logo_text when expanded */}
                {expand ? (
                  <Image
                    src={assets.logo_text}
                    alt="DEEPSEEK Logo"
                    width={120}
                    height={40}
                    className="ml-2 transition-opacity duration-300"
                  />
                ) : (
                  <div className="cursor-pointer relative flex flex-col">
                    <Image
                      src={assets.logo_icon}
                      alt="Logo"
                      width={60} // Slightly reduced size for better fit
                      height={60}
                      className="object-contain opacity-95 hover:opacity-100 transition-opacity duration-200"
                    />
                  </div>
                )}
              </div>

              <button className="">
                <div onClick={() => setExpand(!expand)}>
                  <Image
                    src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
                    alt="Sidebar"
                    width={40}
                    height={40}
                    className="p-1 rounded-full mb-4 transition-all duration-200 ease-in-out hover:bg-gradient-to-tr from-[#2c2d30] to-[#44464a] hover:ring-2 hover:ring-gray-500 hover:scale-105"
                  />
                  {/* Tooltip for sidebar toggle (only when collapsed) */}
                  {!expand && (
                    <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex bg-black text-white text-xs px-3 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md max-w-5xl break-words">
                      Sidebar
                    </div>
                  )}
                </div>
              </button>
            </div>

            {/* Chat Icon (only when collapsed) */}
            {!expand && (
              <button className="relative group flex flex-rows cursor-pointer items-center focus-outline-none">
                <div>
                  <Image
                    src={assets.chat_icon}
                    alt="New Chat"
                    width={40}
                    height={28}
                    className="p-2 rounded-lg transition-all duration-200 ease-in-out hover:bg-gradient-to-br from-[#2c2d30] to-[#44464a] hover:ring-2 hover:ring-gray-500 hover:scale-105"
                  />
                  <div className="absolute w-[90px] left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex bg-black text-white text-xs px-3 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md max-w-5xl break-words transition-opacity duration-200">
                    New Chat
                  </div>
                </div>
              </button>
            )}

            {/* New Chat Button and Chat History (only when expanded) */}
            <div className="flex flex-col w-full">
              {expand && (
                <>
                  {/* New Chat Button */}
                  <button
                    className="flex items-center justify-center bg-blue-600 text-white rounded-lg px-4 py-2 mx-4 my-2 transition-all duration-200 hover:bg-blue-700 hover:scale-105 active:scale-95 shadow-md"
                  >
                    <Image
                      src={assets.chat_icon}
                      alt="New Chat"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium">New Chat</span>
                  </button>

                  {/* Chat History */}
                  <div className="flex flex-col gap-1 px-4 max-h-[calc(100vh-300px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-[#1e1f24]">
                    {chatHistory.map((chat, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between text-white text-sm py-2 px-3 rounded-lg hover:bg-[#2c2d30] transition-all duration-150 cursor-pointer group"
                      >
                        <span className="truncate flex-1">{chat.title}</span>
                        {chat.date && (
                          <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
              // Expanded state: Show "Get App" button with text and "NEW" badge
              <button className="flex items-center justify-between bg-transparent border border-blue-500 text-white rounded-full px-4 py-2 mx-4 transition-all duration-200 hover:bg-blue-500/10 hover:border-blue-400 active:scale-95">
                <div className="flex items-center">
                  <Image
                    src={assets.phone_icon}
                    alt="Phone"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium">Get App</span>
                </div>
                <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 ml-2">
                  NEW
                </span>
              </button>
            ) : (
              // Collapsed state: Show phone icon with QR code tooltip
              <button className="relative group flex cursor-pointer flex-rows items-center focus-outline-none">
                <Image
                  src={assets.phone_icon}
                  alt="Phone"
                  width={35}
                  height={28}
                  className="p-2 rounded-full transition-all duration-200 ease-in-out hover:bg-gradient-to-br from-[#2c2d30] to-[#44464a] hover:ring-2 hover:ring-gray-500 hover:scale-105"
                />
                <div className="absolute w-[140px] left-0 ml-3 bottom-0 -translate-y-1/3 hidden group-hover:flex bg-black text-white px-3 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md transition-opacity duration-200">
                  <Image
                    src={assets.qrcode}
                    alt="QR Code"
                    width={120}
                    height={150}
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
              </button>
            )}

            {/* Profile Section */}
            {expand ? (
              // Expanded state: Show profile icon with text
              <div className="flex items-center px-4 py-2 rounded-lg hover:bg-[#2c2d30] transition-all duration-200 cursor-pointer">
                <Image
                  src={assets.profile_icon}
                  alt="Profile"
                  width={28}
                  height={28}
                  className="cursor-pointer opacity-90 hover:opacity-100"
                />
                <span className="ml-2 text-white text-sm font-medium">
                  My Profile
                </span>
              </div>
            ) : (
              // Collapsed state: Show profile icon with tooltip
              <>
                <Image
                  src={assets.profile_icon}
                  alt="Profile"
                  width={28}
                  height={28}
                  className="cursor-pointer opacity-90 hover:opacity-100 relative group p-2 rounded-full transition-all duration-200 hover:bg-gradient-to-br from-[#2c2d30] to-[#44464a] hover:ring-2 hover:ring-gray-500 hover:scale-105"
                />
                <div className="absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-gray-700 px-2 py-1 rounded shadow-md transition-opacity duration-200">
                  Profile
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;