import React from "react";
import "./Node.css";

function Node(data) {
  //default values
  let height = (data.num / data.arrSize / 2) * 100 + "vh";
  let width = "100vw";
  let backgroundColor = "green";
  let borderStyle = "none";
  let borderColor = "none";

  switch (data.latestAlgo) {
    case "bubbleSort":
      backgroundColor =
        data.index === data.styleInfo.pos ||
        data.index === data.styleInfo.pos + 1
          ? "hotpink"
          : "green";
      break;
    case "selectionSort":
      backgroundColor = data.index === data.styleInfo.pos ? "hotpink" : "green";
      let isMinNode = data.styleInfo.minPos === data.index;
      borderStyle = isMinNode ? "solid" : "none";
      borderColor = isMinNode ? "red" : "none";
      break;
    case "mergeSort":
      if (data.index === data.styleInfo.p1) {
        borderStyle = "solid";
        borderColor = "hotpink";
      }
      if (data.index === data.styleInfo.p2) {
        borderStyle = "solid";
        borderColor = "cyan";
      }
      if (data.index === data.styleInfo.startIdx) {
        backgroundColor = "lime";
      }
      if (data.index === data.styleInfo.endIdx) {
        backgroundColor = "red";
      }

      if (data.index === data.styleInfo.k) {
        backgroundColor = "yellow";
      }
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
