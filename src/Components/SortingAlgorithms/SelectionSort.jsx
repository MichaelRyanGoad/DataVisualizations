async function selectionSort(
  array,
  stepDelay,
  setMyArray,
  setPos,
  setIsRunning,
  setMinPos
) {
  console.log("Selection sort called");
  setIsRunning(true);
  for (let sortedPos = 0; sortedPos < array.length; sortedPos++) {
    let [minVal, minPos] = [array[sortedPos], sortedPos];
    setMinPos(sortedPos);
    for (let i = sortedPos + 1; i < array.length; i++) {
      setPos(i);
      if (array[i] < minVal) {
        minVal = array[i];
        minPos = i;
        setMinPos(i);
      }
      await sleep(stepDelay);
    }
    let temp = array[sortedPos];
    array[sortedPos] = array[minPos];
    array[minPos] = temp;
    setMyArray([...array]);
  }
  setIsRunning(false);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default selectionSort;
