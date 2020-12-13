<script>
  import { Navigator, WaypointNavigator } from "../lib/navigator";
  import Performance from "../components/Performance.svelte";

  let input = `F10
N3
F7
R90
F11`;

  let result1;
  let result2;
  let t0, t1, t2, t3;

  $: {
    if (input) {
      t0 = performance.now(); //setup
      let list = input.split("\n");

      t1 = performance.now(); //puzzle #1
      let navigator = new Navigator();
      list.forEach((m) => navigator.move(m));
      result1 = navigator.distance();

      t2 = performance.now(); //puzzle #2
      let waypointNavigator = new WaypointNavigator({ lat: 1, lon: 10 });
      list.forEach((m) => waypointNavigator.move(m));
      result2 = waypointNavigator.distance();

      t3 = performance.now(); //end of game
    }
  }
</script>

<article>
  <h2>--- Day 12: Rain Risk ---</h2>
  <p>
    Again
    <em>copied with pride</em>
    part 2. But I believe that the calculations are wrong, it is not only a
    matter of changing signs. The vector should rotate also.
  </p>

  <h2>Your input...</h2>
  <textarea wrap="off" cols="30" rows="5" bind:value={input} />

  <h2>--- Part One ---</h2>
  <p>
    Figure out where the navigation instructions lead.
    <em>What is the Manhattan distance between that location and the ship's
      starting position?</em>
  </p>
  <p>Your puzzle answer should be <code>{result1}</code>.</p>

  <h2>--- Part Two ---</h2>
  <p>
    Figure out where the navigation instructions actually lead.
    <em>What is the Manhattan distance between that location and the ship's
      starting position?</em>
  </p>
  <p>Your puzzle answer should be <code>{result2}</code>.</p>

  <Performance {t0} {t1} {t2} {t3} />
</article>
