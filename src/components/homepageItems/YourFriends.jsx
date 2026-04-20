import React from "react";
import Friend from "./Friend";
import useFriends from "../../hooks/useFriends";
import { PulseLoader } from "react-spinners";

const YourFriends = () => {
  const { friends, loading } = useFriends();

  if (loading) {
    return (
      <h2 className="text-center text-2xl my-30">
        <PulseLoader></PulseLoader>
      </h2>
    );
  }

  return (
    <div className="bg-[#f8fafc] ">
      <div className="container mx-auto flex flex-col items-center gap-2 md:flex-row lg:flex-row justify-around mb-10">
        <div className="bg-[#ffffff] h-30 w-60 flex flex-col justify-center items-center">
          <p className="text-[#244d3f] font-bold">10</p>
          <p>Total Friends</p>
        </div>
        <div className="bg-[#ffffff] h-30 w-60 flex flex-col justify-center items-center">
          <p className="text-[#244d3f] font-bold">3</p>
          <p>On Track</p>
        </div>
        <div className="bg-[#ffffff] h-30 w-60 flex flex-col justify-center items-center">
          <p className="text-[#244d3f] font-bold">6</p>
          <p>Need Attention</p>
        </div>
        <div className="bg-[#ffffff] h-30 w-60 flex flex-col justify-center items-center">
          <p className="text-[#244d3f] font-bold">12</p>
          <p>Interactions This Month</p>
        </div>
      </div>
      <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />
      <div className="container mx-auto max-w-7/10 mt-5">
        <h1 className="font-semibold">Your Friends</h1> <br />
        <div className=" grid md:grid-cols-3 lg:grid-cols-4 gap-5">
          {friends.map((friend, id) => {
            return <Friend key={id} friend={friend}></Friend>;
          })}
        </div>
      </div>
    </div>
  );
};

export default YourFriends;
