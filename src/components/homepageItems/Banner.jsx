import React from "react";

const Banner = () => {
  return (
    <div className="min-h-[130px] bg-[#f8fafc]">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">
          Friends to keep close in your life
        </h1>
        <p className="mb-5">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br />
          relationships that matter most.
        </p>
        <button className="bg-[#244d3f] text-white p-1 mb-10">
          + Add a Friend
        </button>
      </div>
    </div>
  );
};

export default Banner;
