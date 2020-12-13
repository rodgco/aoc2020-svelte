const clone = (items) =>
  items.map((item) => (Array.isArray(item) ? clone(item) : item));

export default class SeatingSystem {
  constructor(list) {
    this.list = list;
  }

  round() {
    let s = clone(this.list);
    let changed = false;
    for (let l = 0; l <= this.list.length - 1; l++) {
      for (let c = 0; c <= this.list[0].length - 1; c++) {
        if (
          this.getSeat(l, c) === "L" &&
          this.countAdjacentSeats(l, c, "#") === 0
        ) {
          s[l][c] = "#";
          changed = true;
        }
        if (
          this.getSeat(l, c) === "#" &&
          this.countAdjacentSeats(l, c, "#") >= 4
        ) {
          s[l][c] = "L";
          changed = true;
        }
      }
    }
    this.list = clone(s);
    return changed;
  }

  round2() {
    let s = clone(this.list);
    let changed = false;
    for (let l = 0; l <= this.list.length - 1; l++) {
      for (let c = 0; c <= this.list[0].length - 1; c++) {
        if (
          this.getSeat(l, c) === "L" &&
          this.countLongSeats(l, c, "#") === 0
        ) {
          s[l][c] = "#";
          changed = true;
        }
        if (this.getSeat(l, c) === "#" && this.countLongSeats(l, c, "#") >= 5) {
          s[l][c] = "L";
          changed = true;
        }
      }
    }
    this.list = clone(s);
    return changed;
  }

  countAdjacentSeats(l, c, status = "L") {
    let count = 0;
    for (let ml = l - 1; ml <= l + 1; ml++) {
      for (let mc = c - 1; mc <= c + 1; mc++) {
        if (!(ml === l && mc === c))
          count += this.getSeat(ml, mc) === status ? 1 : 0;
      }
    }
    return count;
  }

  countLongSeats(l, c, status = "L") {
    let len = this.list.length - 1;
    let count = 0;
    let flags = Array.from(Array(8)).map(() => false);
    let seat = "";

    for (let i = 1; i <= len; i++) {
      if (!flags[0]) {
        seat = this.getSeat(l - i, c);
        if (seat !== ".") {
          flags[0] = true;
          if (seat === status) count++;
        }
      }
      if (!flags[1]) {
        seat = this.getSeat(l - i, c + i);
        if (seat !== ".") {
          flags[1] = true;
          if (seat === status) count++;
        }
      }
      if (!flags[2]) {
        seat = this.getSeat(l, c + i);
        if (seat !== ".") {
          flags[2] = true;
          if (seat === status) count++;
        }
      }
      if (!flags[3]) {
        seat = this.getSeat(l + i, c + i);
        if (seat !== ".") {
          flags[3] = true;
          if (seat === status) count++;
        }
      }
      if (!flags[4]) {
        seat = this.getSeat(l + i, c);
        if (seat !== ".") {
          flags[4] = true;
          if (seat === status) count++;
        }
      }
      if (!flags[5]) {
        seat = this.getSeat(l + i, c - i);
        if (seat !== ".") {
          flags[5] = true;
          if (seat === status) count++;
        }
      }
      if (!flags[6]) {
        seat = this.getSeat(l, c - i);
        if (seat !== ".") {
          flags[6] = true;
          if (seat === status) count++;
        }
      }
      if (!flags[7]) {
        seat = this.getSeat(l - i, c - i);
        if (seat !== ".") {
          flags[7] = true;
          if (seat === status) count++;
        }
      }
    }
    return count;
  }

  getSeat(l, c) {
    if (l < 0 || l >= this.list.length || c < 0 || c > this.list[0].length)
      return ".";
    return this.list[l][c];
  }

  countSeats(status = "L") {
    let count = 0;
    for (let l = 0; l <= this.list.length - 1; l++) {
      for (let c = 0; c <= this.list[0].length - 1; c++) {
        if (this.list[l][c] === status) count++;
      }
    }
    return count;
  }

  print() {
    let line = "";
    for (let l = 0; l <= this.list.length - 1; l++) {
      for (let c = 0; c <= this.list[0].length - 1; c++) {
        line += this.list[l][c];
      }
      line += "\n";
    }
    return line;
  }

  printOccupied() {
    let line = "";
    for (let l = 0; l <= this.list.length - 1; l++) {
      for (let c = 0; c <= this.list[0].length - 1; c++) {
        line +=
          this.list[l][c] === "." ? "." : this.countAdjacentSeats(l, c, "#");
      }
      line += "\n";
    }
    return line;
  }

  printOccupiedLong() {
    let line = "";
    for (let l = 0; l <= this.list.length - 1; l++) {
      for (let c = 0; c <= this.list[0].length - 1; c++) {
        line += this.list[l][c] === "." ? "." : this.countLongSeats(l, c, "#");
      }
      line += "\n";
    }
    return line;
  }
}
