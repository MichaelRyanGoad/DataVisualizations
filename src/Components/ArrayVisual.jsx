import React, { useState } from "react";
import Node from "./Node";
import "./ArrayVisual.css";

function ArrayVisual() {
  let stdArray = generateStandardArray(10);
  shuffle(stdArray);

  const [myArray, setMyArray] = useState(stdArray);
  const [pos, setPos] = useState(0);
  const [arrSize, setArrSize] = useState(10);
  const [newSize, setNewSize] = useState(arrSize);
  const [stepDelay, setStepDelay] = useState(300);

  return (
    <div>
      <div className="header">
        <button
          onClick={() => bubbleSort(myArray, stepDelay, setMyArray, setPos)}
        >
          Bubble Sort
        </button>
        <br />

        <input
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
          onClick={() => {
            setArrSize(newSize);
            setMyArray(shuffle(generateStandardArray(newSize)));
          }}
        >
          Generate New Array
        </button>

        <button onClick={() => setMyArray([...shuffle(myArray)])}>
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
  let retArr = [];
  for (let i = 0; i < arrLen; i++) {
    retArr.push(i);
  }
  return retArr;
}

async function bubbleSort(array, stepDelay, setMyArray, setPos) {
  console.log("BUBBLE SORT GOT CALLED");
  let keepGoing = true;
  while (keepGoing) {
    keepGoing = false;
    for (let i = 0; i < array.length - 1; i++) {
      setPos(i);
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        keepGoing = true;
        setMyArray([...array]);
      }
      await sleep(stepDelay);
      console.log("sortStep");
    }
  }
  console.log("sort finished");
  console.log(array);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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

  console.log("Array: ", array);
  return array;
}

export default ArrayVisual;
