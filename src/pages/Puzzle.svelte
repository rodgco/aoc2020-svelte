<script>
  import { link } from "svelte-spa-router";

  import Day1 from "../puzzles/Day1.svelte";
  import Day2 from "../puzzles/Day2.svelte";
  import Day3 from "../puzzles/Day3.svelte";
  import Day4 from "../puzzles/Day4.svelte";
  import Day5 from "../puzzles/Day5.svelte";

  export let params = {};

  let options = {
    1: Day1,
    2: Day2,
    3: Day3,
    4: Day4,
    5: Day5,
  };

  $: prev = params.day !== "1";
  $: next = Number(params.day) !== Object.keys(options).length;
</script>

<span class:share={prev}>
  {#if prev}
    <a href="/2020/day/{Number(params.day) - 1}" use:link>[Prev]</a>
  {:else}[Prev]{/if}
</span>

<span class:share={next}>
  {#if next}
    <a href="/2020/day/{Number(params.day) + 1}" use:link>[Next]</a>
  {:else}[Next]{/if}
</span>

<svelte:component this={options[params.day]} />
