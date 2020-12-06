<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";

  function conditionsFailed(event) {
    logger.debug("conditionsFailed event", event.detail);
  }
</script>

<main>
  <header>
    <div>
      <h1 class="title-global"><a href="/">Advent of Code</a></h1>
    </div>
    <div>
      <h1 class="title-event">
        &nbsp;&nbsp;&nbsp;<span class="title-event-wrap">0xffff&amp;</span><a
          href="/2020">2020</a><span class="title-event-wrap" />
      </h1>
    </div>
  </header>
  <p>
    My attempt to complete the puzzles of
    <a href="https://adventofcode.com/2020">Advent of Code 2020</a>
    using
    <a href="https://svelte.dev">Svelte</a>
    & JS. You'll find the code behind this website, in
    <a href="https://github.com/rodgco/aoc2020-svelte">Github</a>, including the
    how I cleverly solved the puzzles.
  </p>

  <Router
    {routes}
    restoreScrollState={true}
    on:conditionsFailed={conditionsFailed} />
</main>
