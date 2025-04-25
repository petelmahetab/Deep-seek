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
    <div className="min-h-screen bg-[#2a2b2f] text-white flex overflow-hidden">
      {/* Sidebar */}
      {!hideSidebar && (
        <div className={`transition-all duration-300 ease-in-out   bg-[#1e1f24] h-screen flex flex-col justify-between items-center pt-6 pb-6  ${expand ? "w-60" : "w-16"} `}>
          <div className="flex flex-col items-center gap-6 ">
            <div onClick={() => setExpand(!expand)} className="cursor-pointer mb-4">
              <Image src={assets.logo_icon} alt="Logo" width={52} height={52} className="object-contain opacity-95" />
            </div>

            <button
              className="relative group flex flex-col cursor-pointer items-center focus:outline-none"
            >
              <div onClick={() => setExpand(!expand)}>
                <Image src={assets.sidebar_icon} alt="Sidebar" width={40} height={40} className="p-1 rounded-full transition duration-200 ease-in-out
hover:bg-gradient-to-tr from-[#2c2d30] to-[#44464a] hover:ring-1 hover:ring-gray-500

" />
                <div className="absolute  left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex bg-black text-white text-xs px-3 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md max-w-5xl break-words">
                  Sidebar
                </div>
              </div>
            </button>

            <button
              className="relative group flex flex-col cursor-pointer items-center focus:outline-none"
            >
              <div >
                <Image src={assets.chat_icon} alt="Sidebar" width={40} height={28} className="p-1 rounded-full transition duration-200 ease-in-out
hover:bg-gradient-to-tr from-[#2c2d30] to-[#44464a] hover:ring-1 hover:ring-gray-500
" />
                <div className="absolute w-[90px] left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex bg-black text-white text-xs px-3 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md max-w-5xl break-words">
                  New Chat
                </div>
              </div>
            </button>

          </div>

          <div className="flex flex-col items-center gap-6">


            <button className="relative group flex cursor-pointer flex-rows items-center focus:outline-none ">
              <Image
                src={assets.phone_icon}
                alt="Phone"
                width={35}
                height={28}
                className="p-1 rounded-full transition duration-200 ease-in-out
hover:bg-gradient-to-tr from-[#2c2d30] to-[#44464a] hover:ring-1 hover:ring-gray-500"
              />
              <div className="absolute w-[140px] left-0 ml-3 bottom-0 -translate-y-1/3 hidden group-hover:flex bg-black text-white px-3 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md">
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

            <div className="mt-8 w-full h-72">
              <div className="bg-[#44464a] rounded-[30px] px-6 py-2 h-32 flex flex-col gap-4 overflow-hidden">
                <div className="flex items-start">
                  <textarea
                    ref={textareaRef}
                    rows={2}
                    placeholder="Message DeepSeek"
                    className="w-full resize-none bg-transparent text-white placeholder-gray-400 outline-none text-lg overflow-hidden"
                    style={{ minHeight: '40px', maxHeight: '160px' }}
                  />
                </div>

                <div className="flex flex-wrap items-center pb-8 justify-between gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <button className="bg-[#294cb5c7] text-blue-400 text-sm font-medium rounded-full px-4 py-1.5 flex items-center gap-1 group relative">

                      <Image src={assets.deepthink_icon} alt="DeepThink" className="bg-blue-800 text-blue-900" width={18} height={18} />
                      DeepThink (R1)
                      <span className="absolute left-32 bottom-full mb-2 hidden group-hover:block text-xs text-white bg-black px-4 py-2 rounded-tl-2xl rounded-tr-1px rounded-tr-2xl rounded-br-2xl shadow-md">DeepThink</span>
                    </button>
                    <button className="bg-[#2c2d30] text-white text-sm font-medium rounded-full px-4 py-1.5 flex items-center gap-1 group relative p-1 transition duration-200 ease-in-out hover:bg-gradient-to-tr from-[#2c2d30] to-[#44464a] hover:ring-1 hover:ring-gray-500">
                      <Image src={assets.search_icon} alt="Search" width={22} height={18}  />
                      Search
                      <span className="absolute w-full left-18 bottom-full mb-2 hidden group-hover:block text-xs text-white bg-black px-2 py-2 rounded-tl-2xl rounded-tr-1px rounded-tr-2xl rounded-br-2xl shadow-md">Search</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="relative group">
                      <Image src={assets.pin_icon} alt="Attach" width={25} height={22} className="p-1 rounded-full transition duration-200 ease-in-out
hover:bg-gradient-to-tr from-[#2c2d30] to-[#44464a] hover:ring-1 hover:ring-gray-500" />
                      <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-black px-3 py-2 rounded-md shadow-md">Attach</span>
                    </button>
                    <button className="bg-[#64656b] rounded-full p-3 hover:bg-[#747578] relative group">
                      <Image src={assets.arrow_icon_dull} alt="Send" width={15} height={18} />
                      <span className="absolute bottom-full mb-2 hidden  group-hover:block text-xs text-white bg-black px-3 py-1 rounded-tl-2xl rounded-tr-1px rounded-tr-2xl rounded-br-2xl shadow-md">Send</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>


            <div className="relative flex items-center">
              <p className="absolute left-56 top-36 px-5 text-[12px] text-zinc-500 font-bold">AI-generated, for reference only</p>
            </div>
          </div>
        ) : (
          <div className="w-full">{/* Message list */}</div>
        )}
      </div>
    </div>
  );
}
