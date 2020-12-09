<script>
  import Performance from "../components/Performance.svelte";
  import SumFinder from "../lib/sum-finder";

  let input = `1721
979
366
299
675
1456`;

  let result1 = 0;
  let result2 = 0;
  let t0, t1, t2, t3;

  $: {
    if (input) {
      t0 = performance.now(); //setup
      const sumFinder = new SumFinder(input.split("\n").map(Number));
      t1 = performance.now(); //puzzle #1
      result1 = sumFinder.findTwoThatSumTo(2020).reduce((a, v) => a * v, 1);
      t2 = performance.now(); //puzzle #2
      result2 = sumFinder.findThreeThatSumTo(2020).reduce((a, v) => a * v, 1);
      t3 = performance.now(); //end of game
    }
  }
</script>

<article>
  <h2>--- Day 1: Report Repair ---</h2>
  <p>
    For this solution I've created a class named
    <code>SumFinder</code>. For my first solution I've created fuctions to solve
    the two parts of this puzzle.
  </p>
  <p>
    Later I've refactored it into a recursive function
    <code>findNEntriesThatSumTo</code>
    that would find any number of entries in a Array that sum up to a number.
    I'm sure it will be handy in the future!
  </p>

  <h2>Your input...</h2>
  <textarea wrap="off" cols="30" rows="5" bind:value={input} />

  <h2>--- Part One ---</h2>
  <p>
    <em>Find the two entries that sum to
      <code>2020</code>; what do you get if you multiply them together?</em>
  </p>
  <p>Your puzzle answer should be <code>{result1}</code>.</p>

  <h2>--- Part Two ---</h2>
  <p>
    In your expense report,
    <em>what is the product of the three entries that sum to
      <code>2020</code>?</em>
  </p>
  <p>Your puzzle answer should be <code>{result2}</code>.</p>

  <Performance {t0} {t1} {t2} {t3} />
</article>
