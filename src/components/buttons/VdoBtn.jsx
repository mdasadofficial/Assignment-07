"use client";

import { friendContext } from "@/context/ContextProvider";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const VdoBtn = ({ myFriend }) => {
  const { handleAction } = useContext(friendContext);

  const handleVideo = () => {
    handleAction({ friendData: myFriend, type: "video" });

    toast.success(`📹 Video calling ${myFriend?.name || "Friend"}...`);
  };

  return (
    <button
      onClick={handleVideo}
      className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200 transition"
    >
      <span className="text-xl">📹</span>
      <span className="text-sm">Video</span>
    </button>
  );
};

export default VdoBtn;