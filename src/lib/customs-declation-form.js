export default class CustomDeclarationForm {
  constructor() {
    this.data = {};
    this.person = 0;
  }

  addIndividualAnswer(text) {
    this.person += 1;
    text.split("").forEach((question) => {
      this.data[question] = (this.data[question] || 0) + 1;
    });
  }

  countQuestions() {
    return Object.keys(this.data).length;
  }

  countQuestionsAll() {
    return Object.keys(this.data).reduce(
      (a, k) => (this.data[k] === this.person ? a + 1 : a),
      0
    );
  }
}
