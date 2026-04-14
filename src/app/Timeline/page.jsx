import React from 'react';

const Timeline = () => {
  return (
    <section className="bg-[#F8FAFB] py-12 px-6 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#1A2E35] mb-6">Timeline</h2>

        {/* Filter Dropdown */}
        <div className="mb-8">
          <select className="bg-white border border-gray-200 text-gray-500 text-sm rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-100">
            <option>Filter timeline</option>
            <option>Call</option>
            <option>Text</option>
            <option>Video</option>
            <option>Meetup</option>
          </select>
        </div>

        {/* Timeline Items List */}
        <div className="space-y-4">
          
          {/* Item 1: Meetup */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-xl">🤝</div>
            <div>
              <p className="text-gray-800 font-medium">
                <span className="font-bold">Meetup</span> with Tom Baker
              </p>
              <p className="text-gray-400 text-xs mt-1">March 29, 2026</p>
            </div>
          </div>

          {/* Item 2: Text */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-xl">💬</div>
            <div>
              <p className="text-gray-800 font-medium">
                <span className="font-bold">Text</span> with Sarah Chen
              </p>
              <p className="text-gray-400 text-xs mt-1">March 28, 2026</p>
            </div>
          </div>

          {/* Item 3: Meetup */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-xl">🤝</div>
            <div>
              <p className="text-gray-800 font-medium">
                <span className="font-bold">Meetup</span> with Olivia Martinez
              </p>
              <p className="text-gray-400 text-xs mt-1">March 26, 2026</p>
            </div>
          </div>

          {/* Item 4: Video */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-xl">📹</div>
            <div>
              <p className="text-gray-800 font-medium">
                <span className="font-bold">Video</span> with Aisha Patel
              </p>
              <p className="text-gray-400 text-xs mt-1">March 23, 2026</p>
            </div>
          </div>

          {/* Item 5: Call */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-xl">📞</div>
            <div>
              <p className="text-gray-800 font-medium">
                <span className="font-bold">Call</span> with Marcus Johnson
              </p>
              <p className="text-gray-400 text-xs mt-1">March 19, 2026</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Timeline;