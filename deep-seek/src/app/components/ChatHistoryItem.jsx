import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/images/assets/assets';

const ChatHistoryItem = ({ chat, onRename, onDelete }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [newTitle, setNewTitle] = useState(chat.title);

  const handleRename = () => {
    setIsRenaming(false);
    if (newTitle.trim() && newTitle !== chat.title) {
      onRename(chat.title, newTitle);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log('Dropdown toggled, isDropdownOpen:', !isDropdownOpen); // Debug log
  };

  return (
    <div className="flex items-center justify-between p-2 text-white text-sm group cursor-pointer rounded-xl hover:bg-[#2c2d30]/80 transition-all duration-200 backdrop-blur-sm bg-opacity-50 border border-gray-700/30">
      {/* Chat Title (Editable if renaming) */}
      {isRenaming ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleRename}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleRename();
            if (e.key === 'Escape') {
              setIsRenaming(false);
              setNewTitle(chat.title);
            }
          }}
          className="flex-1 bg-[#333437] text-white border border-gray-600 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
          autoFocus
        />
      ) : (
        <span className="truncate flex-1">{chat.title}</span>
      )}

      {/* Date and Three Dots Icon */}
      <div className="flex items-center gap-2">
        {chat.date && (
          <span className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {chat.date}
          </span>
        )}
        <div className="relative flex items-center justify-center h-6 w-6 aspect-square hover:bg-black/80 rounded-lg">
          <Image
            src={assets.three_dots}
            alt="Options"
            className="w-4"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div
              className="absolute right-0 top-8 bg-gray-800 rounded-xl w-max p-3 shadow-lg border border-gray-600 z-50"
              onClick={(e) => e.stopPropagation()} // Prevent clicks on dropdown from closing it
            >
              <div
                className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg cursor-pointer"
                onClick={() => {
                  setIsRenaming(true);
                  setIsDropdownOpen(false);
                }}
              >
                <Image src={assets.pencil_icon} alt="Rename" className="w-4" />
                <p className="text-sm">Rename</p>
              </div>
              <div
                className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg cursor-pointer"
                onClick={() => {
                  onDelete(chat.title);
                  setIsDropdownOpen(false);
                }}
              >
                <Image src={assets.delete_icon} alt="Delete" className="w-4" />
                <p className="text-sm">Delete</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatHistoryItem;