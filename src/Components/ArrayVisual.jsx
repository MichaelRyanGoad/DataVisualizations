import React, { useState } from "react";
import Node from "./Node";
import "./ArrayVisual.css";

function ArrayVisual() {
  let stdArray = generateStandardArray(10);
  shuffle(stdArray);

  const [myArray, setMyArray] = useState(stdArray);

  return (
    <div className="node-row" onClick={() => bubbleSort(myArray, setMyArray)}>
      {myArray.map((value, index) => {
        return <Node key={index} num={value} />;
      })}
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

async function bubbleSort(array, sMA) {
  console.log("BUBBLE SORT GOT CALLED");
  let keepGoing = true;
  while (keepGoing) {
    keepGoing = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        keepGoing = true;
        let newArr = [...array];
        await sleep(300);
        sMA(newArr);
      }

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
