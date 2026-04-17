"use client";

import NoTimeLine from "@/components/NoTimeLine/NoTimeLine";
import TimeLineComp from "@/components/TimeLineComp/TimeLineComp";
import { friendContext } from "@/context/ContextProvider";
import React, { useContext, useState } from "react";

const Timeline = () => {
  const { data } = useContext(friendContext);
  const [filter, setFilter] = useState(data);

  const handleFilter = (e) => {
    const filteredData = data.filter((item) => item.type === e.toLowerCase());
    setFilter(filteredData);
  };

  return (
    <section className="bg-[#F8FAFB] py-12 px-6 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#1A2E35] mb-6">Timeline</h2>

        {/* Filter Dropdown */}
        <div className="mb-8">
          <select
            onChange={(e) => handleFilter(e.target.value)}
            className="bg-white border border-gray-200 text-gray-500 text-sm rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-100">
            <option>Filter timeline</option>
            <option>Call</option>
            <option>Text</option>
            <option>Video</option>
          </select>
        </div>

        {/* Timeline Items List */}
        <div className="space-y-4">
          {/* Item 1: Meetup */}
          {filter.length === 0 ? (
            <NoTimeLine />
          ) : (
            filter.map((item) => <TimeLineComp key={item.id} item={item} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
