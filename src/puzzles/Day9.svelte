<script>
  import Performance from "../components/Performance.svelte";
  import XMAS from "../lib/xmas";

  let input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

  let result1;
  let result2;
  let preamble = 5;
  let t0, t1, t2, t3;

  $: {
    if (input) {
      t0 = performance.now(); //setup
      let xmas = new XMAS(input.split("\n").map(Number), Number(preamble));
      t1 = performance.now(); //puzzle #1
      for (let i = 0; i < xmas.length; i++) {
        if (!xmas.validate(i)) {
          result1 = xmas.value(i);
          break;
        }
      }
      t2 = performance.now(); //puzzle #2
      for (let i = 0; i < xmas.length; i++) {
        if (!xmas.validate(i)) {
          result2 = xmas.validateSet(i);
          break;
        }
      }
      t3 = performance.now(); //end of game
    }
  }
</script>

<article>
  <h2>--- Day 9: Encoding Error ---</h2>
  <p>Implemented the <em>xmas</em> class!</p>

  <h2>Your input...</h2>
  <input bind:value={preamble} /><br /><br />
  <textarea wrap="off" cols="30" rows="5" bind:value={input} />

  <h2>--- Part One ---</h2>
  <p>
    The first step of attacking the weakness in the XMAS data is to find the
    first number in the list (after the preamble) which is
    <em>not</em>
    the sum of two of the 25 numbers before it.
    <em>What is the first number that does not have this property?</em>
  </p>
  <p>Your puzzle answer should be <code>{result1}</code>.</p>

  <h2>--- Part Two ---</h2>
  <p>
    <em>What is the encryption weakness in your XMAS-encrypted list of numbers?</em>
  </p>
  <p>Your puzzle answer should be <code>{result2}</code>.</p>

  <Performance {t0} {t1} {t2} {t3} />
</article>
