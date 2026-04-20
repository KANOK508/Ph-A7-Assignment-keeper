import React, { useContext, useState } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import { useParams } from "react-router";
import { TiTickOutline } from "react-icons/ti";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";

const Timeline = () => {
  const { id } = useParams();
  console.log(id, "id");
  const { timelineData } = useContext(TimelineContext);

  // const { interactionType, friend, date } = timelineData;
  // const { name, age } = useContext(TimelineContext);
  // console.log(name, age);

  const [selected, setSelected] = useState();
  const [filteredData, setFilteredData] = useState(timelineData);

  const handleSelect = (type) => {
    document.getElementById("popover-1")?.hidePopover();

    if (type === selected) {
      setSelected("");
      setFilteredData(timelineData);

      return;
    }

    setSelected(type);
    setFilteredData(
      timelineData.filter((item) => item.interactionType === type),
    );
  };

  if (timelineData.length === 0) {
    return (
      <h2 className="text-center pb-50 pt-30">Sorry, no timeline data found</h2>
    );
  }

  return (
    <div className="bg[#f8fafc]">
      <div className="container mx-auto space-y-5">
        <h1 className="text-2xl font-bold">Timeline</h1>
        <br />

        {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
        {/* For TSX uncomment the commented types below */}
        <button
          className="btn mb-10"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
        >
          {selected ? selected : "Filter timeline"}
          <TiTickOutline></TiTickOutline>
        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li onClick={() => handleSelect("text")}>
            <a>Text {selected === "text" && <TiTickOutline></TiTickOutline>}</a>
          </li>
          <li onClick={() => handleSelect("call")}>
            <a>Call {selected === "call" && <TiTickOutline></TiTickOutline>}</a>
          </li>
          <li onClick={() => handleSelect("video")}>
            <a>
              Video {selected === "video" && <TiTickOutline></TiTickOutline>}
            </a>
          </li>
        </ul>

        {filteredData.map((item, index) => (
          <div key={index}>
            {item.interactionType === "call" && (
              <div className="bg-[#ffffff] shadow rounded-lg flex flex-col  sm:flex-row items-start sm:items-center gap-3 p-3 sm:p-4 w-full ">
                <img
                  src={callImg}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <div className="text-sm sm:text-base">
                  <p className="font-medium">Call with {item.friend.name}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {item.date}
                  </p>
                </div>
              </div>
            )}

            {item.interactionType === "text" && (
              <div className=" bg-[#ffffff] shadow rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 sm:p-4 w-full ">
                <img
                  src={textImg}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <div>
                  <p className="font-medium">Text with {item.friend.name}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {item.date}
                  </p>
                </div>
              </div>
            )}

            {item.interactionType === "video" && (
              <div className=" bg-[#ffffff] shadow rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 sm:p-4 w-full">
                <img
                  src={videoImg}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <div>
                  <p className="font-medium">Video with {item.friend.name}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {item.date}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// };

export default Timeline;
