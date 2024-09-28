class SelectionSort {
  constructor() {}

  sort(values) {
    for (let i = 0; i < values.length - 1; i++) {
      let minIndex = i;

      for (let index = i + 1; index < values.length; index++) {
        if (values[index] < values[minIndex]) {
          minIndex = index;
        }
      }

      if (minIndex !== i) {
        let temp = values[i];
        values[i] = values[minIndex];
        values[minIndex] = temp;
      }
    }

    return values;
  }
}

module.exports = SelectionSort;
// complexity
// best case o(n2)T - o(1)S (in place sort)
// avg case o(n2)T - o(1)S
// worst case o(n2)T - o(1)S
