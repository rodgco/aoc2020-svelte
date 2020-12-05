export default class SumFinder {
  constructor(data) {
    this.data = data;
  }

  load(data) {
    this.data = data;
  }

  findTwoThatSumTo(value) {
    return this.findNEntriesThatSumTo(2, value);
  }

  findThreeThatSumTo(value) {
    return this.findNEntriesThatSumTo(3, value);
  }

  findNEntriesThatSumTo(n, value, start = 0) {
    if (n === 1) return this.data.slice(start).find((e) => e === value);
    let result = undefined;
    let chain;
    for (let i = start; i < this.data.length - 1; i++) {
      chain = this.findNEntriesThatSumTo(n - 1, value - this.data[i], i + 1);
      if (chain) {
        result = [this.data[i], ...[chain].flat()];
        break;
      }
    }
    return result;
  }
}
