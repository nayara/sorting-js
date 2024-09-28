class BubbleSort {
  constructor() {}

  sort(values) {
    for (let index = 0; index < values.length - 1; index++) {
      let swapped = false;

      for (let index = 0; index < values.length; index++) {
        let current = values[index];

        if (current > values[index + 1]) {
          values[index] = values[index + 1];
          values[index + 1] = current;
          swapped = true;
        }
      }

      if (!swapped) break;
    }

    return values;
  }
}

module.exports = BubbleSort;
// complexity
// best case (list sorted in asc order array) = o(n)T - o(1)S
// worst case (list sorted in desc order) = o(n2)T - o(1)S
// avg case o(n2)T - o(1)S
