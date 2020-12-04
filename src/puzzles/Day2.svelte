<script>
  let value = "7-8 h: hhmhhhhh";
  let result1 = 0;
  let result2 = 0;

  $: {
    result1 = 0;
    result2 = 0;

    value.split("\n").forEach((text) => {
      console.log(text);
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

<h2>Day2</h2>
<label for="input">Your expense report input..</label>
<textarea id="input" type="textarea" bind:value />

<h3>First Puzzle</h3>
<p>Result is {result1}</p>

<h3>Second Puzzle</h3>
<p>Result is {result2}</p>
