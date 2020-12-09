<script>
  import { link } from "svelte-spa-router";
  import * as puzzles from "../puzzles/puzzles";

  export let params = {};

  let options = {};

  Object.keys(puzzles).map((k, i) => {
    options[i + 1] = puzzles[k];
  });

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
