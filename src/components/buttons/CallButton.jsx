"use client";

import { toast } from "react-toastify";
import { useContext } from "react";
import { friendContext } from "@/context/ContextProvider";

const CallButton = ({ myFriend }) => {
  const { handleAction } = useContext(friendContext);

  const handleCall = () => {
    handleAction({ friendData: myFriend, type: "call" });

    toast.success(`📞 Calling ${myFriend?.name || "Friend"}...`);
  };

  return (
    <button
      onClick={handleCall}
      className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200 transition"
    >
      <span className="text-xl">📞</span>
      <span className="text-sm">Call</span>
    </button>
  );
};

export default CallButton;