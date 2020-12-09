<script>
  import Performance from "../components/Performance.svelte";
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
  let t0, t1, t2, t3;

  $: {
    t0 = performance.now(); //setup
    let toboggan = new Toboggan(input.split("\n"));
    t1 = performance.now(); //puzzle #1
    result1 = toboggan.countTrees(3, 1);
    t2 = performance.now(); //puzzle #2
    result2 =
      toboggan.countTrees(1, 1) *
      toboggan.countTrees(3, 1) *
      toboggan.countTrees(5, 1) *
      toboggan.countTrees(7, 1) *
      toboggan.countTrees(1, 2);
    t3 = performance.now(); //end of game
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
  <p>Your puzzle answer should be <code>{result1}</code>.</p>

  <h2>--- Part Two ---</h2>
  <p>
    <em>What do you get if you multiply together the number of trees encountered
      on each of the listed slopes?</em>
  </p>
  <p>Your puzzle answer should be <code>{result2}</code>.</p>

  <Performance {t0} {t1} {t2} {t3} />
</article>
