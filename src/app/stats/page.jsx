"use client";
import { friendContext } from "@/context/ContextProvider";
import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const Page = () => {
  const { data } = useContext(friendContext);

  const callData = data.filter((item) => item.type === "call");
  const textData = data.filter((item) => item.type === "text");
  const vdoData = data.filter((item) => item.type === "video");

  const datum = [
    { name: "Call History", value: callData.length, fill: "#002030" },
    { name: "Text History", value: textData.length, fill: "#007720" },
    { name: "Video History", value: vdoData.length, fill: "#001158" },
  ];

  return (
    <div className="flex items-center justify-center my-10 w-full">

      {data.length === 0 ? (
        
        // ✅ No Timeline UI
        <div className="min-h-[60vh] flex items-center justify-center w-full">
          <div className="text-center p-8 rounded-2xl shadow-lg bg-base-100 border border-gray-200 max-w-md w-full">

            <div className="text-6xl mb-4 animate-bounce">📭</div>

            <h2 className="text-2xl font-bold mb-2">
              No Stats Found
            </h2>

            <p className="text-gray-500 mb-6">
              You don't have any activity yet. Start connecting with friends.
            </p>

            <button className="btn btn-success px-6">
              Explore Friends
            </button>
          </div>
        </div>

      ) : (
        
        // ✅ Chart
        <PieChart
          width={400}
          height={400}
        >
          <Pie
            data={datum}
            innerRadius={80}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
          />
          <Tooltip />
          <Legend />
        </PieChart>

      )}
    </div>
  );
};

export default Page;