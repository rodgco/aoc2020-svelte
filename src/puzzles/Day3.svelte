<script>
  import Toboggan from "../lib/toboggan.js";

  let input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

  let result1 = 0;
  let result2 = 0;

  $: {
    let toboggan = new Toboggan(input.split("\n"));
    result1 = toboggan.countTrees(3, 1);
    result2 =
      toboggan.countTrees(1, 1) *
      toboggan.countTrees(3, 1) *
      toboggan.countTrees(5, 1) *
      toboggan.countTrees(7, 1) *
      toboggan.countTrees(1, 2);
  }
</script>

<article>
  <h2>--- Day 3: Toboggan Trajectory ---</h2>
  <p>
    I really like those challenges that use infinite loops, although this one
    was on wasn't complicated.
  </p>

  <h2>Your input...</h2>
  <textarea wrap="off" cols="30" rows="5" bind:value={input} />

  <h2>--- Part One ---</h2>
  <p>
    Starting at the top-left corner of your map and following a slope of right 3
    and down 1,
    <em>how many trees would you encounter?</em>
  </p>
  <p>Your puzzle answer gotta be <code>{result1}</code>.</p>

  <h2>--- Part Two ---</h2>
  <p>
    <em>What do you get if you multiply together the number of trees encountered
      on each of the listed slopes?</em>
  </p>
  <p>Your puzzle answer gotta be <code>{result2}</code>.</p>
</article>
