import React from "react";
import "./Node.css";

function Node(data) {
  //default values
  let height = (data.num / data.arrSize / 2) * 100 + "vh";
  let width = "100vw";
  let backgroundColor = data.visiting ? "hotpink" : "green";
  let borderStyle = data.minNode ? "solid" : "none";
  let borderColor = data.minNode ? "red" : "none";

  switch (data.latestAlgo) {
    case "bubbleSort":
      break;
    case "selectionSort":
      break;
    case "mergeSort":
      break;
    default:
      break;
  }

  const retNode = (
    <div
      style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        borderStyle: borderStyle,
        borderColor: borderColor,
      }}
      className="node"
    >
      <div>{data.num}</div>
    </div>
  );
  return retNode;
}

export default Node;
