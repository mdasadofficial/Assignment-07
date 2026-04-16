import Image from "next/image";
import React from "react";

const CardDetails = ({ myFriend }) => {
  const {
    name,
    status,
    tags,
    days_since_contact,
    picture,
    id,
    email,
    bio,
    goal,
  } = myFriend;
  return (
    <div className="bg-[#F8FAFB] min-h-screen p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sidebar: Profile Summary */}
        <div className="md:col-span-4 space-y-4">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="flex items-center justify-center mx-auto mb-4 overflow-hidden">
              <Image
                src={picture}
                height={50}
                width={50}
                alt={name}
                className="w-20 h-20 bg-gray-100 rounded-full  border object-contain border-gray-50"
              ></Image>
            </div>
            <h2 className="text-2xl font-bold text-slate-800">{name}</h2>
            <div className={`px-3 py-1 inline text-xs font-medium rounded-full capitalize ${status === "overdue" ? "bg-red-600" :  status === "on_track" ? "bg-green-500 " : status === "due_soon" ? "bg-amber-400" : ""}`}>
              {status}
            </div>

            {/* Image placeholder */}
            <div className="flex gap-6 mb-4 justify-center">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex gap-1.5 flex-wrap justify-center"
                >
                  <span className="px-3 py-1 bg-[#E8FAF0] text-[#1D996D] text-xs font-medium rounded-full uppercase">
                    {tag}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-gray-400 italic mt-4 text-sm">{bio}</p>
            <p className="text-gray-400 text-xs mt-2">{email}</p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button className="w-full py-3 bg-white border border-gray-100 rounded-xl text-slate-700 font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
              🔔 Snooze 2 Weeks
            </button>
            <button className="w-full py-3 bg-white border border-gray-100 rounded-xl text-slate-700 font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
              📁 Archive
            </button>
            <button className="w-full py-3 bg-white border border-gray-100 rounded-xl text-red-500 font-medium flex items-center justify-center gap-2 hover:bg-red-50">
              🗑️ Delete
            </button>
          </div>
        </div>

        {/* Right Content: Stats and Activity */}
        <div className="md:col-span-8 space-y-6">
          {/* Top Stats Boxes */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <span className="block text-3xl font-bold text-slate-800">
                62
              </span>
              <span className="text-gray-400 text-xs">Days Since Contact</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <span className="block text-3xl font-bold text-slate-800">
                30
              </span>
              <span className="text-gray-400 text-xs">Goal (Days)</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <span className="block text-lg md:text-xl font-bold text-slate-800">
                Feb 27, 2026
              </span>
              <span className="text-gray-400 text-xs">Next Due</span>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
            <div>
              <h3 className="font-bold text-slate-800">Relationship Goal</h3>
              <p className="text-sm text-gray-500 mt-1">
                Connect every{" "}
                <span className="font-bold text-slate-800">{goal} days</span>
              </p>
            </div>
            <button className="px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium">
              Edit
            </button>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200">
                <span className="text-xl">📞</span>{" "}
                <span className="text-sm">Call</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200">
                <span className="text-xl">💬</span>{" "}
                <span className="text-sm">Text</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-xl border border-transparent hover:border-gray-200">
                <span className="text-xl">📹</span>{" "}
                <span className="text-sm">Video</span>
              </button>
            </div>
          </div>

          {/* Recent Interactions */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-800">Recent Interactions</h3>
              <button className="text-xs font-medium text-gray-500 border border-gray-200 px-3 py-1 rounded-md">
                🕒 Full History
              </button>
            </div>
            <div className="space-y-4">
              {/* Interaction 1 */}
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <div className="flex items-center gap-4">
                  <span className="text-xl bg-gray-50 p-2 rounded-lg">💬</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Text</h4>
                    <p className="text-xs text-gray-400">
                      Asked for career advice
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">Jan 28, 2026</span>
              </div>
              {/* Interaction 2 */}
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <div className="flex items-center gap-4">
                  <span className="text-xl bg-gray-50 p-2 rounded-lg">🤝</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Meetup</h4>
                    <p className="text-xs text-gray-400">
                      Industry conference meetup
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">Jan 28, 2026</span>
              </div>
              {/* Interaction 3 */}
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <div className="flex items-center gap-4">
                  <span className="text-xl bg-gray-50 p-2 rounded-lg">🤝</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Video</h4>
                    <p className="text-xs text-gray-400">
                      Industry conference meetup
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">Jan 28, 2026</span>
              </div>
              {/* Interaction 4 */}
              <div className="flex justify-between items-center py-3 border-b border-gray-50">
                <div className="flex items-center gap-4">
                  <span className="text-xl bg-gray-50 p-2 rounded-lg">🤝</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Text</h4>
                    <p className="text-xs text-gray-400">
                      Industry conference meetup
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">Jan 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
