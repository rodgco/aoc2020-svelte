export default class HandheldMachine {
  constructor(program = []) {
    this.accumulator = 0;
    this.program = program;
    this.status = "idle";
  }

  run() {
    this.status = "running";
    this.accumulator = 0;
    let tracking = [];
    let l = 0;
    let infiniteLoop = false;
    let success = false;

    while (!success && !infiniteLoop) {
      tracking.push(l);

      if (this.program[l][0] === "acc") {
        this.accumulator += Number(this.program[l][1]);
        l += 1;
      } else if (this.program[l][0] === "nop") {
        l += 1;
      } else if (this.program[l][0] === "jmp") {
        l += Number(this.program[l][1]);
      }

      if (tracking.includes(l)) {
        this.status = "infinite loop detected";
        infiniteLoop = true;
      }
      if (l >= this.program.length) {
        this.status = "success";
        success = true;
      }
    }
    return { status: this.status, accumulator: this.accumulator };
  }

  autofix() {
    for (let l = 0; l < this.program.length; l++) {
      if (this.program[l][0] !== "acc") {
        let prev = this.program[l][0];
        this.program[l][0] = prev === "nop" ? "jmp" : "nop";
        this.run();
        this.program[l][0] = prev;
        if (this.status === "success") {
          return { status: this.status, accumulator: this.accumulator };
        }
      }
    }
    return { accumulator: undefined };
  }
}
