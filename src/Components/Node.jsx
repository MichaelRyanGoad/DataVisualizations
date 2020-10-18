import React from "react";
import "./Node.css";

function Node(data) {
  const retNode = (
    <div
      style={{
        height: (data.num / data.arrSize) * 100 + "vh",
        width: "100vw",
        backgroundColor: data.visiting ? "hotpink" : "green",
        borderStyle: data.minNode ? "solid" : "none",
        borderColor: data.minNode ? "red" : "none",
      }}
      className="node"
    >
      <div>{data.num}</div>
    </div>
  );
  return retNode;
}

export default Node;
