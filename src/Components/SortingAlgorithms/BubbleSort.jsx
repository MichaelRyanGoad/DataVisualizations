async function bubbleSort(
  array,
  stepDelay,
  setMyArray,
  setIsRunning,
  setStyleInfo
) {
  console.log("Bubblesort called");
  setIsRunning(true);
  let keepGoing = true;
  while (keepGoing) {
    keepGoing = false;
    for (let i = 0; i < array.length - 1; i++) {
      setStyleInfo((style) => ({ ...style, pos: i }));
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        keepGoing = true;
        setMyArray([...array]);
      }
      await sleep(stepDelay);
    }
  }
  setStyleInfo({});
  setIsRunning(false);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default bubbleSort;
