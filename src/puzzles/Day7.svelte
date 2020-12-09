<script>
  import Performance from "../components/Performance.svelte";
  import Bag from "../lib/bag";

  let input = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

  let result1;
  let result2;
  let t0, t1, t2, t3;

  $: {
    if (input) {
      t0 = performance.now(); //setup
      Bag.reset();

      input.split("\n").forEach((line) => {
        if (line !== "") {
          let bagName = line.match(/^([a-z]+\s[a-z]+)/g)[0].trim();
          let containedBagList = {};
          line
            .split("contain")[1]
            .split(",")
            .forEach((containedBag) => {
              containedBag = containedBag.trim();
              if (containedBag !== "no other bags.") {
                let containedBagCount = Number(
                  containedBag.match(/^([0-9]+)/)[1]
                );
                let containedBagName = containedBag
                  .match(/^[0-9]+\s([a-z]+\s[a-z]+)?/)[1]
                  .trim();
                containedBagList[containedBagName] = containedBagCount;
              }
            });
          const newBag = new Bag(bagName);
          newBag.addBags(containedBagList);
        }
      });
      t1 = performance.now(); //puzzle #1
      result1 = Bag.list["shiny gold"].countContainers();
      t2 = performance.now(); //puzzle #2
      result2 = Bag.list["shiny gold"].countBags();
      t3 = performance.now(); //end of game
    }
  }
</script>

<article>
  <h2>--- Day 7: Handy Haversacks ---</h2>
  <p>Oh Monday!!! Struggled a lot just for not paying attention.</p>
  <p>
    Abstrated all the hierarchy og bags into a Bag class, with links
    up(containers) and down(contains). Kept track of everything in a class
    variable, and instantiated contained bags before reaching their definition.
    And forgot to handle existing bags on the constructor to avoid duplication,
    a simple clause
    <code>return</code>
    at the constructor with the the existing bag from the list solved the
    problem.
  </p>
  <p />

  <h2>Your input...</h2>
  <textarea wrap="off" cols="30" rows="5" bind:value={input} />

  <h2>--- Part One ---</h2>
  <p>
    <em>How many bag colors can eventually contain at least one
      <code>shiny gold</code>
      bag?</em>
  </p>
  <p>Your puzzle answer should be <code>{result1}</code>.</p>

  <h2>--- Part Two ---</h2>
  <p>
    <em>How many individual bags are required inside your single
      <code>shiny gold</code>
      bag?</em>
  </p>
  <p>Your puzzle answer should be <code>{result2}</code>.</p>

  <Performance {t0} {t1} {t2} {t3} />
</article>
