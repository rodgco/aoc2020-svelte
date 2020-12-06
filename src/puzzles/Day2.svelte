<script>
  let input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

  let result1 = 0;
  let result2 = 0;

  $: {
    result1 = 0;
    result2 = 0;

    input.split("\n").forEach((text) => {
      if (text) {
        let lower, upper, letter, password;
        [lower, upper, letter, password] = text
          .split(/[\s-:]+/)
          .map((n) => Number(n) || n);

        const regExp = new RegExp(letter, "gi");
        const count = (password.match(regExp) || []).length;
        result1 += count >= lower && count <= upper ? 1 : 0;

        const valid =
          (password[lower - 1] === letter || password[upper - 1] === letter) &&
          password[lower - 1] !== password[upper - 1];
        result2 += valid ? 1 : 0;
      }
    });
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
</article>
