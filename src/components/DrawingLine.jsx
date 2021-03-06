import React from "react";
import styled from "styled-components";

const Path = styled.path`
  fill: none;
  stroke-width: ${props => props.currentStroke || "10px"};
  stroke: ${props => props.currentColor || "green"};
  stroke-linejoin: round;
  stroke-linecap: round;
`;

function DrawingLine({ line }) {
  const pathData =
    "M " +
    line.points
      .map(p => {
        return `${p.x} ${p.y}`;
      })
      .join(" L ");

  return <Path currentColor={line.color} currentStroke={line.stroke} d={pathData} />;
}

export default DrawingLine;
