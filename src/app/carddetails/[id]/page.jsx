import CardDetails from "@/components/homepage/CardDetails";
import React from "react";

const FriendsDetailsPage = async ({ params }) => {
  const { id } = await params;
    console.log(Number(id));
  const dataPromise = async () => {
    const res = await fetch("http://localhost:3000/data.json");
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
