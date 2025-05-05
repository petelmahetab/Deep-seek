import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/images/assets/assets';
import ChatHistoryItem from './ChatHistoryItem';

const ChatHistorySection = ({ expand }) => {
  const [chatHistory, setChatHistory] = useState([
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
  ]);

  const handleRename = (oldTitle, newTitle) => {
    setChatHistory((prev) =>
      prev.map((chat) =>
        chat.title === oldTitle ? { ...chat, title: newTitle } : chat
      )
    );
  };

  const handleDelete = (title) => {
    setChatHistory((prev) => prev.filter((chat) => chat.title !== title));
  };

  return (
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
          <div className="flex flex-col gap-1 px-4 max-h-[calc(100vh-300px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-[#1e1f24] scrollbar-thumb-rounded-full">
            {chatHistory.map((chat, index) => (
              <ChatHistoryItem
                key={index}
                chat={chat}
                onRename={handleRename}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ChatHistorySection;