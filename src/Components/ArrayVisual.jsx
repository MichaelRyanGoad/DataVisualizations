import React, { useState } from "react";
import Node from "./Node";
import "./ArrayVisual.css";
import bubbleSort from "./SortingAlgorithms/BubbleSort";
import selectionSort from "./SortingAlgorithms/SelectionSort";
import mergeSort from "./SortingAlgorithms/MergeSort";
import { useForm } from "./useForm";

function ArrayVisual() {
  //Array and array metadata
  const [myArray, setMyArray] = useState(() =>
    shuffle(generateStandardArray(10))
  );
  const [arrSize, setArrSize] = useState(10);

  //CSS Information about sorting positions
  const [styleInfo, setStyleInfo] = useState(() => {
    return { pos: -2, minPos: -1 };
  });

  //latest ran algorithm
  const [algo, setAlgo] = useState(() => "bubbleSort");

  //Metadata for disabling UI
  const [isRunning, setIsRunning] = useState(false);

  //Form data
  const [values, handleChange] = useForm({ newSize: arrSize, stepDelay: 300 });

  //function to refresh any variables effecting node style
  function refresh() {
    setStyleInfo({ pos: -2, minPos: -1 });
  }

  return (
    <div>
      <div className="header">
        {/* Bubble Sort Button */}
        <button
          disabled={isRunning}
          onClick={() => {
            refresh();
            setAlgo("bubbleSort");
            bubbleSort(
              myArray,
              values.stepDelay,
              setMyArray,
              setIsRunning,
              setStyleInfo
            );
          }}
        >
          Bubble Sort
        </button>

        {/* Selection Sort Button */}
        <button
          disabled={isRunning}
          onClick={() => {
            refresh();
            setAlgo("selectionSort");
            selectionSort(
              myArray,
              values.stepDelay,
              setMyArray,
              setIsRunning,
              setStyleInfo
            );
          }}
        >
          Selection Sort
        </button>

        {/* Merge Sort Button */}
        <button
          disabled={isRunning}
          onClick={() => {
            refresh();
            setAlgo("mergeSort");
            mergeSort(
              myArray,
              values.stepDelay,
              setMyArray,
              setIsRunning,
              setStyleInfo
            );
          }}
        >
          Merge Sort
        </button>
        <br />

        {/* Array Size Slider + Label */}
        <input
          disabled={isRunning}
          name="newSize"
          type="range"
          min="3"
          max="100"
          id="sizeRange"
          placeholder={values.newSize}
          onChange={handleChange}
        ></input>
        <label htmlFor="sizeRange">Array Size: {values.newSize}</label>
        <br />

        {/* Step Delay Slider + label */}
        <label htmlFor="delayInput">Step delay(ms): </label>
        <input
          disabled={isRunning}
          name="stepDelay"
          type="number"
          min="0"
          id="delayInput"
          value={values.stepDelay}
          onChange={handleChange}
        ></input>

        <br />
        {/* Generate New Array Button */}
        <button
          disabled={isRunning}
          onClick={() => {
            setArrSize(values.newSize);
            setMyArray(shuffle(generateStandardArray(values.newSize)));
          }}
        >
          Generate New Array
        </button>

        <button
          disabled={isRunning}
          onClick={() => setMyArray((myArray) => [...shuffle(myArray)])}
        >
          Shuffle Array
        </button>
      </div>
      <div className="node-row">
        {myArray.map((value, index) => {
          return (
            <Node
              key={index}
              index={index}
              num={value}
              styleInfo={styleInfo}
              arrSize={arrSize}
              latestAlgo={algo}
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
