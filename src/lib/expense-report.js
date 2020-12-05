export default class ExpenseReport {
  constructor(data) {
    this.data = data;
  }

  load(data) {
    this.data = data;
  }

  findTwoThatSumTo(value) {
    var i, j;
    for (i = 0; i < this.data.length - 1; i++) {
      for (j = i + 1; j < this.data.length; j++) {
        if (this.data[i] + this.data[j] === value)
          return [this.data[i], this.data[j]];
      }
    }
    return [null, null];
  }

  findThreeThatSumTo(value) {
    var i, j, k;
    for (i = 0; i < this.data.length - 2; i++) {
      for (j = i + 1; j < this.data.length - 1; j++) {
        for (k = j + 1; k < this.data.length - 1; k++) {
          if (this.data[i] + this.data[j] + this.data[k] === value)
            return [this.data[i], this.data[j], this.data[k]];
        }
      }
    }
    return [null, null, null];
  }
}
