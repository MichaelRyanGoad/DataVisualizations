import React, { useState } from "react";
import Node from "./Node";
import "./ArrayVisual.css";
import bubbleSort from "./SortingAlgorithms/BubbleSort";

function ArrayVisual() {
  const [myArray, setMyArray] = useState([]);
  const [pos, setPos] = useState(0);
  const [arrSize, setArrSize] = useState(10);
  const [newSize, setNewSize] = useState(arrSize);
  const [stepDelay, setStepDelay] = useState(300);
  const [isRunning, setIsRunning] = useState(false);

  //initialize array if first time
  if (!myArray.length) {
    setMyArray(shuffle(generateStandardArray(10)));
  }

  return (
    <div>
      <div className="header">
        <button
          disabled={isRunning}
          onClick={() => {
            bubbleSort(myArray, stepDelay, setMyArray, setPos, setIsRunning);
          }}
        >
          Bubble Sort
        </button>
        <br />

        <input
          disabled={isRunning}
          type="range"
          min="3"
          max="100"
          id="sizeRange"
          placeholder={newSize}
          onChange={(event) => {
            setNewSize(event.target.value);
          }}
        ></input>
        <label htmlFor="sizeRange">Array Size: {newSize}</label>
        <br />

        <label htmlFor="delayInput">Step delay(ms): </label>
        <input
          disabled={isRunning}
          type="number"
          min="0"
          id="delayInput"
          placeholder={stepDelay}
          onChange={(event) => {
            setStepDelay(event.target.value);
          }}
        ></input>

        <br />

        <button
          disabled={isRunning}
          onClick={() => {
            setArrSize(newSize);
            setMyArray(shuffle(generateStandardArray(newSize)));
          }}
        >
          Generate New Array
        </button>

        <button
          disabled={isRunning}
          onClick={() => setMyArray([...shuffle(myArray)])}
        >
          Shuffle Array
        </button>
      </div>
      <div className="node-row">
        {myArray.map((value, index) => {
          return (
            <Node
              key={index}
              num={value}
              visiting={pos === index ? true : false}
              arrSize={arrSize}
            />
          );
        })}
      </div>
    </div>
  );
}

function generateStandardArray(arrLen) {
  console.log("generate standard array called");
  let retArr = [];
  for (let i = 0; i < arrLen; i++) {
    retArr.push(i);
  }
  return retArr;
}

function shuffle(array) {
  console.log("shuffle called");
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default ArrayVisual;
