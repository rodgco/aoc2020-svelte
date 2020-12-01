Array.prototype.findTwoThatSumTo = function (sum) {
  var i, j;
  for (i = 0; i < this.length - 1; i++) {
    for (j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === sum) return [this[i], this[j]];
    }
  }
  return [null, null];
};

Array.prototype.findThreeThatSumTo = function (sum) {
  var i, j, k;
  for (i = 0; i < this.length - 2; i++) {
    for (j = i + 1; j < this.length - 1; j++) {
      for (k = j + 1; k < this.length - 1; k++) {
        if (this[i] + this[j] + this[k] === sum)
          return [this[i], this[j], this[k]];
      }
    }
  }
  return [null, null, null];
};
