<script>
  import binarySpacePartioner, {
    calcSeatId,
  } from "../lib/binary-space-partioner";

  let input = "FBFBBFFRLR";
  let result1 = 0;
  let result2 = 0;

  $: {
    let seatList = input
      .split("\n")
      .map((s) => calcSeatId(...binarySpacePartioner(s)))
      .sort(function (a, b) {
        return a - b;
      });
    result1 = Math.max(...seatList);

    for (let i = 0; i <= seatList.length - 2; i++) {
      if (seatList[i] === seatList[i + 1] - 2) {
        result2 = seatList[i] + 1;
        break;
      }
    }
  }
</script>

<h1>Day 5</h1>
<textarea bind:value={input} />
<h2>Puzzle 1</h2>
<p>Highest seat id: {result1}</p>

<h2>Puzzle 2</h2>
<p>Your seat id: {result2}</p>
