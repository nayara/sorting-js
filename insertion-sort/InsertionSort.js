class InsertionSort {
  constructor() {}

  sort(values) {
    for (let index = 0; index < values.length; index++) {
      let elementToBeInserted = values[index];
      let arrayLimit = index - 1;

      while (arrayLimit >= 0 && values[arrayLimit] > elementToBeInserted) {
        values[arrayLimit + 1] = values[arrayLimit];
        arrayLimit = arrayLimit - 1;
      }

      values[arrayLimit + 1] = elementToBeInserted;
    }

    return values;
  }
}

module.exports = InsertionSort;
// complexity
// best - when array is sorted = o(n)T - o(1)s
// avg = o(n2)T
// worst - when array is sorted in reverse order = o(n2)T
