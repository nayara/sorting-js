const InsertionSort = require("./InsertionSort");

describe("Insertion Sort", () => {
  let insertionSort;

  beforeEach(() => {
    insertionSort = new InsertionSort();
  });

  test("sorts an unsorted array of numbers", () => {
    const array = [38, 27, 43, 3, 9, 82, 10];
    const sortedArray = [3, 9, 10, 27, 38, 43, 82];
    expect(insertionSort.sort(array)).toEqual(sortedArray);
  });

  test("handles an already sorted array", () => {
    const array = [1, 2, 3, 4, 5];
    expect(insertionSort.sort(array)).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles an array with duplicate values", () => {
    const array = [5, 3, 8, 3, 1, 3];
    const sortedArray = [1, 3, 3, 3, 5, 8];
    expect(insertionSort.sort(array)).toEqual(sortedArray);
  });

  test("handles an empty array", () => {
    const array = [];
    expect(insertionSort.sort(array)).toEqual([]);
  });

  test("handles a single-element array", () => {
    const array = [42];
    expect(insertionSort.sort(array)).toEqual([42]);
  });

  test("handles an array with negative numbers", () => {
    const array = [4, -1, 7, -5, 2];
    const sortedArray = [-5, -1, 2, 4, 7];
    expect(insertionSort.sort(array)).toEqual(sortedArray);
  });

  test("handles an array of identical values", () => {
    const array = [6, 6, 6, 6, 6];
    const sortedArray = [6, 6, 6, 6, 6];
    expect(insertionSort.sort(array)).toEqual(sortedArray);
  });

  test("handles reverse-sorted arrays", () => {
    const array = [9, 7, 5, 3, 1];
    const sortedArray = [1, 3, 5, 7, 9];
    expect(insertionSort.sort(array)).toEqual(sortedArray);
  });
});
