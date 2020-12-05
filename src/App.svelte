<script>
  import Day1 from "./puzzles/Day1.svelte";
  import Day2 from "./puzzles/Day2.svelte";
  import Day3 from "./puzzles/Day3.svelte";
  import Day4 from "./puzzles/Day4.svelte";
  import Day5 from "./puzzles/Day5.svelte";

  let current = "none";

  let options = {
    none: null,
    Day1,
    Day2,
    Day3,
    Day4,
    Day5,
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Advent Of Code 2020!!!</h1>
  <p>
    My attempt to complete the puzzles of Advent of Code 2020 using Svelte & JS.
  </p>

  <select name="current" bind:value={current}>
    {#each Object.keys(options) as option (option)}
      <option value={option}>{option}</option>
    {/each}
  </select>

  {#if current !== 'none'}
    <svelte:component this={options[current]} />
  {:else}
    <h2>Select a day</h2>
  {/if}
</main>
