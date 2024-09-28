class MergeSort {
  constructor() {}

  sort(values) {
    if (values.length <= 1) return values;

    const mid = Math.floor(values.length / 2);
    const left = this.sort(values.slice(0, mid));
    const right = this.sort(values.slice(mid));

    return this.merge(left, right);
  }

  merge = function (left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }

    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }

    return result;
  };
}

module.exports = MergeSort;
// complexity
// best: O(n log n)T | o(n)S
// worst: O(n log n)T | o(n)S
