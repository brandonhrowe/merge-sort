/* eslint-disable complexity */
const split = arr => {
  const middle = Math.floor(arr.length / 2);
  return [arr.slice(0, middle), arr.slice(middle)];
};

const merge = (arr1, arr2) => {
  const result = [];
  let resultCounter = 0;
  let counter1 = 0;
  let counter2 = 0;
  while (counter1 < arr1.length && counter2 < arr2.length) {
    if (arr1[counter1] <= arr2[counter2]) {
      result[resultCounter] = arr1[counter1];
      resultCounter++;
      counter1++;
    } else {
      result[resultCounter] = arr2[counter2];
      resultCounter++;
      counter2++;
    }
  }
  if (counter1 < arr1.length) {
    for (counter1; counter1 < arr1.length; counter1++) {
      result[resultCounter] = arr1[counter1];
      resultCounter++;
    }
  } else {
    for (counter2; counter2 < arr2.length; counter2++) {
      result[resultCounter] = arr2[counter2];
      resultCounter++;
    }
  }

  return result;
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  const [left, right] = split(arr);
  if (left.length === 1 && right.length === 1) {
    return merge(left, right);
  } else {
    return merge(mergeSort(left), mergeSort(right));
  }
};
