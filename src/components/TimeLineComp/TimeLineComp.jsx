import React from 'react';

const TimeLineComp = ({item}) => {
    return (
        <div 
              className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-xl">
                {
                    item.type === 'call' && '📞'
                }
                {
                    item.type === 'text' && '💬'
                }
                {
                    item.type === 'video' && '📹'
                }
              </div>
              <div>
                <p className="text-gray-800 font-medium">
                  <span className="font-bold">Meetup</span> with {item.name}
                </p>
                <p className="text-gray-400 text-xs mt-1">{item.formatDate}</p>
              </div>
            </div>
    );
};

export default TimeLineComp;