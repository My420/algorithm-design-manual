export const insertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];
    let j = i - 1;

    while (j >= 0 && value < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = value;
  }

  return arr;
};
