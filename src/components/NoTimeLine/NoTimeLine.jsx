import React from "react";

const NoTimeLine = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center p-8 rounded-2xl shadow-lg bg-base-100 border border-gray-200 max-w-md w-full">
        
        
        <div className="text-6xl mb-4">📭</div>

        <h2 className="text-2xl font-bold mb-2">
          No Timeline Found
        </h2>

        <p className="text-gray-500 mb-6">
          You don't have any activity yet. Start connecting with friends and your timeline will appear here.
        </p>

      
        <button className="btn btn-success px-6">
          Explore Friends
        </button>
      </div>
    </div>
  );
};

export default NoTimeLine;