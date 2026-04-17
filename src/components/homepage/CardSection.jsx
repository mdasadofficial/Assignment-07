import React from "react";
import CardInfo from "./CardInfo";

const CardSection = async () => {
  const res = await fetch("https://b13-a7-kin-keeper-tau.vercel.app/data.json",{
    cache: "no-store",
  });

  const friends = await res.json();
  // console.log(friends);

  return (
    <div className="container mx-auto px-4">
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-[#1A2E35] mb-10 text-left">
        Your Friends
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 ">
        {friends.map((friend) => (
          <CardInfo friend={friend} key={friend.id}></CardInfo>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
