<script>
  import binarySpacePartitioner, {
    calcSeatId,
  } from "../lib/binary-space-partitioner";

  let input = `FBFBBFFRLR
FFBBFFBLLL
FFBBFFBLRL`;

  let result1 = 0;
  let result2 = 0;

  $: {
    let seatList = input
      .split("\n")
      .map((s) => calcSeatId(...binarySpacePartitioner(s)))
      .sort(function (a, b) {
        return a - b;
      });
    result1 = Math.max(...seatList);

    result2 =
      seatList.find((id, index, array) => {
        if (id === array[index + 1] - 2) {
          return true;
        }
      }) + 1;
  }
</script>

<article>
  <h2>--- Day 5: Binary Boarding ---</h2>
  <p>
    What I really loved in this one is that the solution is pure math,
    <em>binary math</em>! I've used the
    <em>power of powers of two</em>
    to solve this one!
  </p>

  <h2>Your input...</h2>
  <textarea wrap="off" cols="30" rows="5" bind:value={input} />

  <h2>--- Part One ---</h2>
  <p>
    As a sanity check, look through your list of boarding passes.
    <em>What is the highest seat ID on a boarding pass?</em>
  </p>
  <p>Your puzzle answer should be <code>{result1}</code>.</p>

  <h2>--- Part Two ---</h2>
  <p><em>What is the ID of your seat?</em></p>
  <p>Your puzzle answer should be <code>{result2}</code>.</p>
</article>
