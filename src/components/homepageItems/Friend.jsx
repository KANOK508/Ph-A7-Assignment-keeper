import React from "react";
import { Link } from "react-router";

const Friend = ({ friend }) => {
  return (
    <Link
      to={`/${friend.id}`}
      className="bg-[#ffffff] flex flex-col items-center p-5"
    >
      <img src={friend.picture} className="rounded-full w-[25%]" />
      <h1 className="font-bold">{friend.name}</h1>
      <p>62d ago</p>
      <p className=" flex gap-2 mb-2">
        <span className="bg-[#cbfadb] rounded-md text-xs p-0.5">
          {friend.tags?.[0]}
        </span>
        <span className="bg-[#cbfadb] rounded-md text-xs ">
          {friend.tags?.[1]}
        </span>
      </p>
      <p
        className={`px-3 py-1 rounded-full text-white text-xs  ${
          friend.status === "Overdue"
            ? "bg-red-500"
            : friend.status === "On track"
              ? "bg-[#244d3f]"
              : friend.status === "Amount Due"
                ? "bg-yellow-500"
                : "bg-gray-500"
        }`}
      >
        {friend.status}
      </p>
    </Link>
  );
};

export default Friend;
