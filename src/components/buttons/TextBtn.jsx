"use client";

import { friendContext } from "@/context/ContextProvider";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const TextBtn = ({ myFriend }) => {
  const { handleAction } = useContext(friendContext);

  const handleText = () => {
    handleAction({ friendData: myFriend, type: "text" });

    toast.info(`💬 Messaging ${myFriend?.name || "Friend"}...`);
  };

  return (
    <button
      onClick={handleText}
      className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200 transition"
    >
      <span className="text-xl">💬</span>
      <span className="text-sm">Text</span>
    </button>
  );
};

export default TextBtn;