import React from 'react';

const CardSection = () => {
  return (
    <section className="bg-white py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-[#1A2E35] mb-10 text-left">
          Your Friends
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* David Kim Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
            {/* Image placeholder */}
            <div className="w-20 h-20 bg-gray-100 rounded-full mb-4 border border-gray-50 flex items-center justify-center text-2xl">👤</div>
            <h3 className="text-lg font-bold text-[#1A2E35] mb-1">David Kim</h3>
            <p className="text-gray-400 text-xs mb-3">62d ago</p>
            <div className="flex gap-1.5 flex-wrap justify-center">
              <span className="px-3 py-1 bg-[#E8FAF0] text-[#1D996D] text-xs font-medium rounded-full">WORK</span>
              <span className="px-3 py-1 bg-[#FFFBEB] text-[#B45309] text-xs font-medium rounded-full">Almost Due</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;