import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import { HiOutlineArchiveBox, HiOutlineBellSnooze } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";
import { TimelineContext } from "../../context/TimelineContext";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
const FriendDetails = () => {
  const { id } = useParams();
  console.log(id, "params");

  const { friends, loading } = useFriends();

  const expectedFriend = friends.find((friend) => friend.id === Number(id));
  console.log(expectedFriend, "expectedFriend");

  const navigate = useNavigate();
  const { timelineData, setTimelineData } = useContext(TimelineContext);

  const handleInteraction = (type) => {
    const newData = {
      interactionType: type,
      friend: expectedFriend,
      date: new Date().toLocaleDateString(),
    };
    toast(`${type} with ${expectedFriend.name}`);
    setTimelineData([...timelineData, newData]);
    navigate(`/timeline/${id}`);
  };

  if (loading) {
    return (
      <PulseLoader className="container mx-auto text-center my-30"></PulseLoader>
    );
  }

  return (
    <div className="bg-[#f8fafc] pb-19">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-6  py-10 ">
        {/* left-side/sidebar  */}
        <aside className="col-span-12 md:col-span-4">
          <div className="bg-[#ffffff] shadow-xs w-auto rounded-md flex flex-col items-center p-5 mb-5">
            <img
              src={expectedFriend.picture}
              className="rounded-full h-20 w-20 object-cover"
            />
            <h1 className="font-bold mt-2">{expectedFriend.name}</h1>
            <div className="flex gap-2 mb-2 mt-1 flex-wrap justify-center">
              <span className="bg-[#cbfadb] rounded-md text-xs  py-1">
                {expectedFriend.tags?.[0]}
              </span>
              <span className="bg-[#cbfadb] rounded-md text-xs  py-1">
                {expectedFriend.tags?.[1]}
              </span>
            </div>

            {/* <p className=" flex gap-2 mb-2">
              <span className="bg-[#cbfadb] rounded-md text-xs p-0.5">
                {expectedFriend.tags?.[0]}
              </span>
              <span className="bg-[#cbfadb] rounded-md text-xs ">
                {expectedFriend.tags?.[1]}
              </span>
            </p> */}
            <p className="text-center text-sm text-gray-600">
              "{expectedFriend.bio}"
            </p>
            <p className="text-xs text-gray-400 mt-1">Preferred: email</p>
          </div>

          <div className="flex flex-col gap-3">
            <button className="bg-[#ffffff] w-full font-semibold py-2 flex items-center justify-center gap-2 rounded-md shadow-sm">
              <HiOutlineBellSnooze></HiOutlineBellSnooze>
              Snooze 2 Weeks
            </button>
            <button className="bg-[#ffffff] w-full font-semibold py-2 flex items-center justify-center gap-2 rounded-md shadow-sm">
              <HiOutlineArchiveBox></HiOutlineArchiveBox>
              Archive
            </button>
            <button className="bg-[#ffffff] text-red-500 w-full font-semibold py-2 flex items-center justify-center gap-2 rounded-md shadow-sm">
              <MdDeleteOutline></MdDeleteOutline>
              Delete
            </button>
          </div>
        </aside>

        {/* right-side */}

        <div className="col-span-12 md:col-span-8 space-y-6">
          {/* top-part  */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#ffffff] shadow-lg   p-5 text-center rounded-md">
              <p className="text-[#244d3f] font-bold text-lg">
                {expectedFriend.days_since_contact}
              </p>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>
            <div className="bg-[#ffffff] shadow-lg  p-5 text-center rounded-md">
              <p className="text-[#244d3f] font-bold text-lg">
                {expectedFriend.goal}
              </p>
              <p className="text-sm text-gray-500">Goal(Days)</p>
            </div>
            <div className="bg-[#ffffff] shadow-lg  p-5 text-center rounded-md">
              <p className="text-[#244d3f] font-bold text-lg">
                {expectedFriend.next_due_date}
              </p>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>
          {/* middle-part  */}
          <div className="bg-[#ffffff] shadow-lg p-5 rounded-md">
            <div className="flex justify-between items-center">
              <h1 className="text-[#244d3f] font-semibold">
                Relationship Goal
              </h1>
              <button className="text-sm bg-[#f8fafc]  px-3 py-1 rounded-md">
                Edit
              </button>
            </div>
            <br />
            <p className="mt-2 text-gray-600 text-sm">
              Connect every <span className="font-bold">30 days</span>
            </p>
          </div>

          {/* last-part  */}

          <div className="bg-[#ffffff] shadow-lg rounded-md p-5">
            <h1 className="text-[#244d3f] font-semibold mb-4">
              Quick Check-In
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div
                onClick={() => handleInteraction("call")}
                className="bg-[#f8fafc] shadow-md py-6 flex flex-col items-center justify-center rounded-md "
              >
                <img src={callImg} />
                <p>Call</p>
              </div>
              <div
                onClick={() => handleInteraction("text")}
                className="bg-[#f8fafc] shadow-md py-6 flex flex-col items-center justify-center rounded-md"
              >
                <img src={textImg} />
                <p>Text</p>
              </div>
              <div
                onClick={() => handleInteraction("video")}
                className="bg-[#f8fafc] shadow-md py-6 flex flex-col items-center justify-center rounded-md"
              >
                <img src={videoImg} />
                <p>video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
