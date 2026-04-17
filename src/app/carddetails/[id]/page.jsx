import CardDetails from "@/components/homepage/CardDetails";
import React from "react";

const FriendsDetailsPage = async ({ params }) => {
  const { id } = await params;
    console.log(Number(id));
  const dataPromise = async () => {
    const res = await fetch("https://b13-a7-kin-keeper-tau.vercel.app/data.json" ,{
    cache: "no-store",
  });
    const data = res.json();
    // console.log(data);
    return data;
  };

  const friends = await dataPromise();

  const myFriend = friends.find((friend) => friend.id === Number(id));



  return (
    <div> 
      <CardDetails myFriend={myFriend} key={myFriend.id}> </CardDetails>
    </div>
  );
};

export default FriendsDetailsPage;
