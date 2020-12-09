<script>
  import Performance from "../components/Performance.svelte";

  let input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

  let result1 = 0;
  let result2 = 0;
  let t0, t1, t2, t3;

  $: {
    t0 = performance.now(); //setup
    let list = input.split("\n").map((text) => {
      if (text) {
        return text.split(/[\s-:]+/).map((n) => Number(n) || n);
      }
    });
    t1 = performance.now(); //puzzle #1
    result1 = list.reduce((acc, text) => {
      let [lower, upper, letter, password] = text;
      const regExp = new RegExp(letter, "gi");
      const count = (password.match(regExp) || []).length;
      return acc + count >= lower && count <= upper ? 1 : 0;
    }, 0);
    t2 = performance.now(); //puzzle #2
    result2 = list.reduce((acc, text) => {
      let [lower, upper, letter, password] = text;
      const valid =
        (password[lower - 1] === letter || password[upper - 1] === letter) &&
        password[lower - 1] !== password[upper - 1];
      return acc + valid ? 1 : 0;
    });
    t3 = performance.now(); //end of game
  }
</script>

<article>
  <h2>--- Day 2: Password Philosophy ---</h2>
  <p>
    The most challenging on this one was to find a way to abstract the password
    into a separate class or module, which I didn't (yet!). All the code is the
    main svelte file.
  </p>

  <h2>Your input...</h2>
  <textarea wrap="off" cols="30" rows="5" bind:value={input} />

  <h2>--- Part One ---</h2>
  <p><em>How many passwords are valid</em> according to their policies?</p>
  <p>Your puzzle answer should be <code>{result1}</code>.</p>

  <h2>--- Part Two ---</h2>
  <p>
    <em>How many passwords are valid</em>
    according to the new interpretation of the policies?
  </p>
  <p>Your puzzle answer should be <code>{result2}</code>.</p>

  <Performance {t0} {t1} {t2} {t3} />
</article>
