class QuickSort {
  constructor() {}

  sort(values) {
    if (values.length <= 1) return values;

    const pivot = values[values.length - 1];
    const left = [];
    const right = [];

    for (let index = 0; index < values.length - 1; index++) {
      if (values[index] < pivot) {
        left.push(values[index]);
      } else {
        right.push(values[index]);
      }
    }

    return [...this.sort(left), pivot, ...this.sort(right)];
  }
}

module.exports = QuickSort;
//complexity
// best: o(nlogn)T | o(logn)S
// avg: o(nlogn)T
// worst => pivot selection is poor (already sorted list with a bad pivot strategy): o(n2)T | o(n)S => due to recursion stack