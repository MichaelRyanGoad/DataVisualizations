async function bubbleSort(array, stepDelay, setMyArray, setPos, setIsRunning) {
  console.log("Bubblesort called");
  setIsRunning(true);
  let keepGoing = true;
  while (keepGoing) {
    keepGoing = false;
    for (let i = 0; i < array.length; i++) {
      setPos(i);
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
  setIsRunning(false);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default bubbleSort;
