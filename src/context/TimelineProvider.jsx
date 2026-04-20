import React, { useState } from "react";
import { TimelineContext } from "./TimelineContext";

const TimelineProvider = ({ children }) => {
  const [timelineData, setTimelineData] = useState([]);
  const data = {
    // name: "arshad",
    // age: 37,
    timelineData,
    setTimelineData,
  };
  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
};

export default TimelineProvider;
