const QuickSort = require("./QuickSort");

describe("Quick Sort", () => {
  let quickSort;

  beforeEach(() => {
    quickSort = new QuickSort();
  });

  test("sorts an unsorted array of numbers", () => {
    const array = [38, 27, 43, 3, 9, 82, 10];
    const sortedArray = [3, 9, 10, 27, 38, 43, 82];
    expect(quickSort.sort(array)).toEqual(sortedArray);
  });

  test("handles an already sorted array", () => {
    const array = [1, 2, 3, 4, 5];
    expect(quickSort.sort(array)).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles an array with duplicate values", () => {
    const array = [5, 3, 8, 3, 1, 3];
    const sortedArray = [1, 3, 3, 3, 5, 8];
    expect(quickSort.sort(array)).toEqual(sortedArray);
  });

  test("handles an empty array", () => {
    const array = [];
    expect(quickSort.sort(array)).toEqual([]);
  });

  test("handles a single-element array", () => {
    const array = [42];
    expect(quickSort.sort(array)).toEqual([42]);
  });
});
