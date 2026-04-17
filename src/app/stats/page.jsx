"use client";
import { friendContext } from "@/context/ContextProvider";
import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const page = () => {
  const { data } = useContext(friendContext);
  console.log(data);

  const callData = data.filter((item) => item.type === "call");
  const textData = data.filter((item) => item.type === "text");
  const vdoData = data.filter((item) => item.type === "video");

  const datum = [
    { name: "Call History", value: callData.length, fill: "#002030" },
    { name: "Text History", value: textData.length, fill: "#007720" },
    { name: "Video History", value: vdoData.length, fill: "#001158" },
  ];

  return (
    <div className="flex items-center justify-center my-10">
      {data.length === 0 ? (
        "kicchunai"
      ) : (
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={datum}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            //   cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
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

export default page;
