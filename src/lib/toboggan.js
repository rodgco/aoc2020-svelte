export default class Toboggan {
  constructor(input) {
    this.input = input;
    this.width = input[0].length;
    this.height = input.length;
  }

  countTrees(x, y) {
    let trees = 0;
    let currentX = 0;
    let currentY = 0;

    currentX += x;
    currentY += y;

    while (currentY < this.height) {
      if (this.input[currentY][currentX] === "#") trees += 1;

      currentX = (currentX + x) % this.width;
      currentY += y;
    }
    return trees;
  }
}
