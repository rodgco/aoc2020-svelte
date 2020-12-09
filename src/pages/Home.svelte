<script>
  import { link } from "svelte-spa-router";
  import * as puzzles from "../puzzles/puzzles";

  let options = Object.keys(puzzles).map((k, i) => {
    return { index: i + 1, title: k };
  });

  console.log(puzzles);
  console.log(options);
</script>

<main>
  {#each options as puzzle}
    <a
      use:link
      aria-label={puzzle.title}
      href="/2020/day/{puzzle.index}">{puzzle.title}</a><br />
  {/each}
</main>
