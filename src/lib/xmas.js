export default class XMAS {
  constructor(input, preamble = 25) {
    this.input = input;
    this.preamble = preamble;
  }

  validate(position) {
    let value = this.input[position + this.preamble]; // poisition is relative to the preamble

    for (let i = position; i <= position + this.preamble - 1; i++) {
      for (let j = i + 1; j <= position + this.preamble; j++) {
        if (this.input[i] + this.input[j] === value) return true;
      }
    }

    return false;
  }

  value(position) {
    if (position >= this.length) return undefined;
    return this.input[position + this.preamble];
  }

  getSet(position) {
    return this.input.slice(position, this.preamble);
  }

  validateSet(position) {
    let value = this.input[position + this.preamble];

    for (let i = 0; i <= this.length - 1 - 1; i++) {
      for (let j = i + 1; j <= this.length; j++) {
        if (this.input.slice(i, j).reduce((a, v) => a + v, 0) === value) {
          return (
            Math.min(...this.input.slice(i, j)) +
            Math.max(...this.input.slice(i, j))
          );
        }
      }
    }
    return [];
  }

  get length() {
    return this.input.length - this.preamble;
  }
}
