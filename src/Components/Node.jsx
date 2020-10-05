import React from "react";
import "./Node.css";

function Node(data) {
  const retNode = (
    <div
      style={{
        height: (data.num / data.arrSize) * 100 + "vh",
        width: "100vw",
        backgroundColor: data.visiting ? "hotpink" : "green",
      }}
      className="node"
    >
      <div>{data.num}</div>
    </div>
  );
  return retNode;
}

export default Node;
