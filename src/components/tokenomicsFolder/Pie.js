import React from "react";
// import Pie from "./Pie";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import { pieData } from "./data/pieData";
import { Pie } from "@visx/shape";
function DiagramPie({
  active,
  setActive,
  backgroundColor,
  setBackgroundColor,
}) {
  const width = 450;
  const half = width / 2;
  return (
    <div>
      <div className="pie">
        <svg width={width / 1.5} height={width / 1.5}>
          <Group top={half / 1.5} left={half / 1.5}>
            <Pie
              data={pieData}
              pieValue={(data) => data.amount}
              outerRadius={half / 1.5}
              innerRadius={(half - 150) / 1.5}
            >
              {(pie) => {
                return pie.arcs.map((arc) => {
                  return (
                    <>
                      <g
                        key={arc.data.symbol}
                        fill={arc.data.color}
                        onClick={() => {
                          setActive(arc.data);
                          setBackgroundColor(arc.data.color);
                        }}
                      >
                        <path
                          d={pie.path(arc)}
                          stroke="#fff"
                          strokeWidth={"1px"}
                        ></path>
                      </g>
                      <g style={{ opacity: 1 }}>
                        <circle
                          r="20"
                          cx={arc.data.x / 1.5}
                          cy={arc.data.y / 1.5}
                          fill="white"
                        ></circle>
                        <text
                          x={arc.data.x / 1.5}
                          y={arc.data.y / 1.5}
                          dy=".33em"
                          fontSize={16}
                          textAnchor="middle"
                          pointerEvents="none"
                        >
                          {arc.data.procent}
                        </text>
                      </g>
                      ;
                    </>
                  );
                });
              }}
            </Pie>
            <circle r="95" fill="rgba(0,0,0,0.5)" className="circle1"></circle>
            <circle r="85" fill={backgroundColor} className="circle2"></circle>
            <Text
              textAnchor="middle"
              fill="white"
              fontFamily="Nunito, sansa-serif"
              fontSize={16}
              fontWeight={700}
            >
              {active.symbol + active.procent}
            </Text>
          </Group>
        </svg>
      </div>
      <div className="Bigpie">
        <svg width={width} height={width}>
          <Group top={half} left={half}>
            <Pie
              data={pieData}
              pieValue={(data) => data.amount}
              outerRadius={half}
              innerRadius={half - 150}
            >
              {(pie) => {
                return pie.arcs.map((arc) => {
                  return (
                    <>
                      <g
                        key={arc.data.symbol}
                        fill={arc.data.color}
                        onClick={() => {
                          setActive(arc.data);
                          setBackgroundColor(arc.data.color);
                        }}
                      >
                        <path
                          d={pie.path(arc)}
                          stroke="#fff"
                          strokeWidth={"1px"}
                        ></path>
                      </g>
                      <g style={{ opacity: 1 }}>
                        <circle
                          r="20"
                          cx={arc.data.x}
                          cy={arc.data.y}
                          fill="white"
                        ></circle>
                        <text
                          x={arc.data.x}
                          y={arc.data.y}
                          dy=".33em"
                          fontSize={16}
                          textAnchor="middle"
                          pointerEvents="none"
                        >
                          {arc.data.procent}
                        </text>
                      </g>
                      ;
                    </>
                  );
                });
              }}
            </Pie>
            <circle r="150" fill="rgba(0,0,0,0.5)" className="circle1"></circle>
            <circle r="130" fill={backgroundColor} className="circle2"></circle>
            <Text
              textAnchor="middle"
              fill="white"
              fontFamily="Nunito, sansa-serif"
              fontSize={16}
              fontWeight={700}
            >
              {active.symbol + active.procent}
            </Text>
          </Group>
        </svg>
      </div>
    </div>
  );
}

export default DiagramPie;

// <div className="pie">
// <svg width={width} height={width} style={{ background: "red" }}>
//   <Group top={half} left={half}>
//     <Pie
//       data={pieData}
//       pieValue={(data) => data.amount}
//       outerRadius={half}
//       innedRadius={half - 150}
//       style={{ backgroundColor: "green" }}
//     >
//       {(pie) => {
//         return pie.arcs.map((arc) => {
//           return (
//             <>
//               <g key={arc.data.symbol} fill={arc.data.color}>
//                 <path
//                   d={pie.path(arc)}
//                   stroke="#fff"
//                   strokeWidth={"1px"}
//                 ></path>
//               </g>
//               <g style={{ opacity: 1 }}>
//                 <circle
//                   r="20"
//                   cx={arc.data.x}
//                   cy={arc.data.y}
//                   fill="white"
//                 ></circle>
//               </g>
//             </>
//           );
//         });
//       }}
//     </Pie>
//   </Group>
// </svg>
// </div>
