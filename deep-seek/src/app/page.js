"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { assets } from "@/images/assets/assets.js";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [hideSidebar, setHideSidebar] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      const handleInput = () => {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
        setHideSidebar(textarea.scrollHeight > 160);
      };

      textarea.addEventListener("input", handleInput);
      return () => textarea.removeEventListener("input", handleInput);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#1e1f24] text-white flex overflow-hidden">
      {/* Sidebar */}
      {!hideSidebar && (
        <div className={`transition-all duration-300 ease-in-out bg-[#2a2b2f] h-screen flex flex-col justify-between items-center pt-6 pb-6 ${expand ? "w-60" : "w-20"}`}>
          <div className="flex flex-col items-center gap-6">
            <div onClick={() => setExpand(!expand)} className="cursor-pointer mb-4">
              <Image src={assets.logo_icon} alt="Logo" width={52} height={52} className="object-contain opacity-95" />
            </div>
            <Image src={assets.sidebar_icon} alt="Sidebar" width={28} height={28} className="cursor-pointer opacity-90 hover:opacity-100 relative group" />
            <div className="absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-gray-700 px-2 py-1 rounded shadow-md">Sidebar</div>
            <Image src={assets.chat_icon} alt="Chat" width={28} height={28} className="cursor-pointer opacity-90 hover:opacity-100 relative group" />
            <div className="absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-gray-700 px-2 py-1 rounded shadow-md">Chat</div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <Image src={assets.phone_icon} alt="Phone" width={28} height={28} className="cursor-pointer opacity-90 hover:opacity-100 relative group" />
            <div className="absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-gray-700 px-2 py-1 rounded shadow-md">Call</div>
            <Image src={assets.profile_icon} alt="Profile" width={28} height={28} className="cursor-pointer opacity-90 hover:opacity-100 relative group" />
            <div className="absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-gray-700 px-2 py-1 rounded shadow-md">Profile</div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 overflow-hidden">
        {messages.length === 0 ? (
          <div className="text-center w-full max-w-2xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Image src={assets.logo_icon} alt="logo" width={60} height={60} className="rounded-full p-2 hover:bg-[#343537] hover:scale-110 transition" />
              <h1 className="text-3xl font-light">Hi, I'm DeepSeek.</h1>
            </div>
            <p className="text-base mt-1 text-gray-300">How can I help you today?</p>

            <div className="mt-8 w-full">
              <div className="bg-[#44464a] rounded-[30px] px-6 py-4 flex flex-col gap-4 overflow-hidden">
                <div className="flex items-start">
                  <textarea
                    ref={textareaRef}
                    rows={2}
                    placeholder="Message DeepSeek"
                    className="w-full resize-none bg-transparent text-white placeholder-gray-400 outline-none text-sm overflow-hidden"
                    style={{ minHeight: '40px', maxHeight: '160px' }}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <button className="bg-[#294cb5c7] text-blue-400 text-sm font-medium rounded-full px-4 py-1.5 flex items-center gap-1 group relative">
                      <svg width="18" height="18" fill="currentColor" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="text-blue-400">
                        <path d="M2.65602 17.3439...Z" strokeWidth="0.1" />
                        <path d="M10.706 11.7041...Z" strokeWidth="0.2" />
                      </svg>
                      DeepThink (R1)
                      <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-gray-700 px-2 py-1 rounded shadow-md">DeepThink</span>
                    </button>
                    <button className="bg-[#2c2d30] text-white text-sm font-medium rounded-full px-4 py-1.5 flex items-center gap-1 group relative">
                      <Image src={assets.search_icon} alt="Search" width={18} height={18} />
                      Search
                      <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-gray-700 px-2 py-1 rounded shadow-md">Search</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="relative group">
                      <Image src={assets.pin_icon} alt="Attach" width={16} height={22} className="opacity-100" />
                      <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-gray-700 px-2 py-1 rounded shadow-md">Attach</span>
                    </button>
                    <button className="bg-[#64656b] rounded-full p-3 hover:bg-[#747578] relative group">
                      <Image src={assets.arrow_icon_dull} alt="Send" width={18} height={20} />
                      <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-gray-700 px-2 py-1 rounded shadow-md">Send</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full">{/* Message list */}</div>
        )}
      </div>
    </div>
  );
}
