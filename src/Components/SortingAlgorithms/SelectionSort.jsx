async function selectionSort(
  array,
  stepDelay,
  setMyArray,
  setIsRunning,
  setStyleInfo
) {
  console.log("Selection sort called");
  setIsRunning(true);
  for (let sortedPos = 0; sortedPos < array.length; sortedPos++) {
    let [minVal, minPos] = [array[sortedPos], sortedPos];
    setStyleInfo((style) => ({ ...style, minPos: sortedPos }));
    for (let i = sortedPos + 1; i < array.length; i++) {
      setStyleInfo((style) => ({ ...style, pos: i }));
      if (array[i] < minVal) {
        minVal = array[i];
        minPos = i;
        setStyleInfo((style) => ({ ...style, minPos: i }));
      }
      await sleep(stepDelay);
    }
    let temp = array[sortedPos];
    array[sortedPos] = array[minPos];
    array[minPos] = temp;
    setMyArray([...array]);
  }
  setStyleInfo({});
  setIsRunning(false);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default selectionSort;
