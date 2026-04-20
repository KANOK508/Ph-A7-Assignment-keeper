import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";
import { TimelineContext } from "../../context/TimelineContext";

const Stats = () => {
  const { timelineData } = useContext(TimelineContext);
  console.log(timelineData);

  const counts = timelineData.reduce(
    (acc, item) => {
      if (item.interactionType === "call") acc.call += 1;
      if (item.interactionType === "text") acc.text += 1;
      if (item.interactionType === "video") acc.video += 1;
      return acc;
    },
    { call: 0, text: 0, video: 0 },
  );

  const data = [
    { name: "Call", value: counts.call, fill: "#0088FE" },
    { name: "Text", value: counts.text, fill: "#00C49F" },
    { name: "Video", value: counts.video, fill: "#FFBB28" },
  ];
  return (
    <div className="bg-[#f8fafc] pb-5 ">
      <h1 className="font-semibold text-2xl pl-30 py-5">
        Friendship Analytics
      </h1>
      <div className="bg-[#ffffff] shadow-xs container mx-auto  h-[511px] ">
        <p className="text-[#244d3f] font-semibold p-5 pl-50">
          By Interaction Type
        </p>

        <PieChart
          style={{
            width: "80%",
            maxWidth: "400px",
            maxHeight: "80vh",
            aspectRatio: 1,
            margin: "auto",
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend></Legend>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;
