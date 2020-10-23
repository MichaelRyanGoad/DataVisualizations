async function mergeSort(
  array,
  stepDelay,
  setMyArray,
  setIsRunning,
  setStyleInfo
) {
  console.log("MergeSort called");
  setIsRunning(true);

  if (array.length <= 1) {
    return array;
  }
  let auxiliaryArray = [...array];
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray);
  setIsRunning(false);
  return array;

  async function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray) {
    if (startIdx === endIdx) {
      return;
    }
    let middleIdx = Math.floor((startIdx + endIdx) / 2);
    await mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray);
    await mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray);
    await doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray);
    setStyleInfo({});
  }

  async function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray
  ) {
    setStyleInfo((style) => ({ ...style, startIdx, middleIdx, endIdx }));
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      //Workaround to get around ESLint warning.
      let ii = i;
      let jj = j;
      let kk = k;

      await setStyleInfo((style) => ({ ...style, p1: ii, p2: jj, k: kk }));
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        mainArray[k] = auxiliaryArray[i];
        i += 1;
      } else {
        mainArray[k] = auxiliaryArray[j];
        j += 1;
      }
      k += 1;
      setMyArray([...array]);
      await sleep(stepDelay);
    }
    while (i <= middleIdx) {
      mainArray[k] = auxiliaryArray[i];
      i += 1;
      k += 1;
      setMyArray([...array]);
      await sleep(stepDelay);
    }
    while (j <= endIdx) {
      mainArray[k] = auxiliaryArray[j];
      j += 1;
      k += 1;
      setMyArray([...array]);
      await sleep(stepDelay);
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default mergeSort;
