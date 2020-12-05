<script>
  import SumFinder from "../lib/sum-finder";

  let input = `1721
979
366
299
675
1456`;

  let result1 = 0;
  let result2 = 0;

  $: {
    const sumFinder = new SumFinder(input.split("\n").map(Number));

    result1 = sumFinder.findTwoThatSumTo(2020).reduce((a, v) => a * v, 1);
    result2 = sumFinder.findThreeThatSumTo(2020).reduce((a, v) => a * v, 1);
  }
</script>

<label for="input">Your expense report input..</label>
<textarea id="input" bind:value={input} />

<h3>First Puzzle</h3>
<p>Two numbers multiplied: {result1}</p>

<h3>Second Puzzle</h3>
<p>Three number multiplied: {result2}</p>
