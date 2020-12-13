<script>
  import SeatingSystem from "../lib/seating-system";
  import Performance from "../components/Performance.svelte";

  let input = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;

  let result1;
  let result2;
  let t0, t1, t2, t3;

  const clone = (items) =>
    items.map((item) => (Array.isArray(item) ? clone(item) : item));

  $: {
    if (input) {
      t0 = performance.now(); //setup
      let list = input.split("\n").map((l) => l.split(""));
      let seatingSystem = new SeatingSystem(list);

      t1 = performance.now(); //puzzle #1
      while (seatingSystem.round()) {}
      result1 = seatingSystem.countSeats("#");

      t2 = performance.now(); //puzzle #2
      let ss2 = new SeatingSystem(list);
      while (ss2.round2()) {}
      result2 = ss2.countSeats("#");

      t3 = performance.now(); //end of game
    }
  }
</script>

<article>
  <h2>--- Day 11: Seating System ---</h2>
  <p>
    Not particularly happy with the performance of this one. Gotta review it.
    Ideas:
    <em>instead of a list of list work on a big string and mod for navigation</em>.
  </p>

  <h2>Your input...</h2>
  <textarea wrap="off" cols="30" rows="5" bind:value={input} />

  <h2>--- Part One ---</h2>
  <p><em>How many seats end up occupied?</em></p>
  <p>Your puzzle answer should be <code>{result1}</code>.</p>

  <h2>--- Part Two ---</h2>
  <p>
    Given the new visibility method and the rule change for occupied seats
    becoming empty, once equilibrium is reached,
    <em>how many seats end up occupied?</em>
  </p>
  <p>Your puzzle answer should be <code>{result2}</code>.</p>

  <Performance {t0} {t1} {t2} {t3} />
</article>
