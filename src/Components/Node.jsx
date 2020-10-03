import React from "react";
import "./Node.css";

function Node(data) {
  const retNode = (
    <div
      style={{
        height: (data.num / 10) * 100 + "vh",
      }}
      className="node"
    >
      {data.num}
    </div>
  );
  return retNode;
}

export default Node;
