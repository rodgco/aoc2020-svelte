<script>
  import Performance from "../components/Performance.svelte";
  import HandheldMachine from "../lib/handheld-machine";

  let input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

  let result1;
  let result2;
  let t0, t1, t2, t3;

  $: {
    if (input) {
      t0 = performance.now(); //setup
      let program = input.split("\n").map((line) => line.split(" "));
      let handheld = new HandheldMachine(program);
      t1 = performance.now(); //puzzle #1
      result1 = handheld.run().accumulator;
      t2 = performance.now(); //puzzle #2
      result2 = handheld.autofix().accumulator;
      t3 = performance.now(); //end of game
    }
  }
</script>

<article>
  <h2>--- Day 8: Handheld Halting ---</h2>
  <p>
    First part was easy, second part I struglled a little bit. I was checking
    for loop inserting the index of the commands on a array, and them using
    Array.find to check if that position has been visited before. But what
    happens when (1) the loop is the first instruction [0] and you assert it
    with an if?
  </p>

  <h2>Your input...</h2>
  <textarea wrap="off" cols="30" rows="5" bind:value={input} />

  <h2>--- Part One ---</h2>
  <p>
    Run your copy of the boot code. Immediately before any instruction is
    executed a second time,
    <em>what value is in the accumulator?</em>
  </p>
  <p>Your puzzle answer should be <code>{result1}</code>.</p>

  <h2>--- Part Two ---</h2>
  <p>
    Fix the program so that it terminates normally by changing exactly one
    <code>jmp</code>
    (to
    <code>nop</code>) or
    <code>nop</code>
    (to
    <code>jmp</code>).
    <em>What is the value of the accumulator after the program terminates?</em>
  </p>
  <p>Your puzzle answer should be <code>{result2}</code>.</p>

  <Performance {t0} {t1} {t2} {t3} />
</article>
