"use client";

import { friendContext } from "@/context/ContextProvider";
import { Type } from "lucide-react";
import React, { useContext } from "react";

const CallButton = ({ myFriend }) => {
  const { handleAction } = useContext(friendContext);

  return (
    <button
      onClick={() => handleAction({ friendData: myFriend, type: "call" })}
      className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200"
    >
      <span className="text-xl">📞</span> <span className="text-sm">Call</span>
    </button>
  );
};

export default CallButton;
