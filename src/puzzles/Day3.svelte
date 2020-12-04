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

<h1>Day 3</h1>
<textarea bind:value={input} />
<h2>Puzzle 1</h2>
<p>Number of trees: {result1}</p>

<h2>Puzzle 2</h2>
<p>Result: {result2}</p>
