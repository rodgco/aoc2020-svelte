export default class Bag {
  constructor(name) {
    if (!Bag.list[name]) {
      this.name = name;
      this.contains = {};
      this.isContainedBy = [];
      Bag.list[name] = this;
    } else {
      return Bag.list[name];
    }
  }

  /**
   *
   * @param {*} listOfBags - Array of bag names
   *
   */
  addBags(listOfBags = {}) {
    Object.keys(listOfBags).forEach((bagName) => {
      const bag = Bag.list[bagName] || new Bag(bagName);
      this.contains[bagName] = { bag, count: listOfBags[bagName] };
      bag.addContainer(this);
    });
  }

  /**
   *
   * @param {*} bag
   */
  addContainer(bag) {
    this.isContainedBy.push(bag);
  }

  getChainOfContainers() {
    let result = [];
    this.isContainedBy.forEach((bag) => {
      result.push(bag.name);
      result.push(...bag.getChainOfContainers()); // Count container containers
    });
    return result;
  }

  countContainers() {
    let chainOfContainers = this.getChainOfContainers();
    let removeDuplicates = chainOfContainers.filter(
      (item, index) => chainOfContainers.indexOf(item) === index
    );

    return removeDuplicates.length;
  }

  countBags() {
    let count = 0;
    Object.keys(this.contains).forEach((bagName) => {
      count +=
        this.contains[bagName].count *
        (1 + this.contains[bagName].bag.countBags());
    });
    return count;
  }

  getList() {
    return Bag.list;
  }
}

Bag.list = {};

Bag.reset = function () {
  Bag.list = {};
};
