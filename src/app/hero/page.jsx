import React from 'react';

const hero = () => {
  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Header Section */}
        <h2 className="text-4xl font-extrabold text-[#1A2E35] mb-4">
          Friends to keep close in your life
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the 
          relationships that matter most.
        </p>

        {/* Add Friend Button */}
        <button className="inline-flex items-center gap-2 bg-[#2D4F4F] text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#233d3d] transition-colors mb-16">
          <span className="text-xl">+</span> Add a Friend
        </button>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          
          {/* Total Friends */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-[#1A2E35] mb-1">10</span>
            <span className="text-gray-400 text-sm">Total Friends</span>
          </div>

          {/* On Track */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-[#1A2E35] mb-1">3</span>
            <span className="text-gray-400 text-sm">On Track</span>
          </div>

          {/* Need Attention */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-[#1A2E35] mb-1">6</span>
            <span className="text-gray-400 text-sm">Need Attention</span>
          </div>

          {/* Interactions */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-[#1A2E35] mb-1">12</span>
            <span className="text-gray-400 text-sm">Interactions This Month</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default hero;