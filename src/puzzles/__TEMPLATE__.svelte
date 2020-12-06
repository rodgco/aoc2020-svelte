<script>
  let input = ``;

  let result1;
  let result2;

  $: {
    if (input) {
    }
  }
</script>

<article>
  <h2>--- Day N: This is a Template ---</h2>
  <p>
    This is a paragraph. Use
    <code>code</code>
    and
    <em>emphasis</em>
    when needed
  </p>

  <h2>Your input...</h2>
  <textarea wrap="off" cols="30" rows="5" bind:value={input} />

  <h2>--- Part One ---</h2>
  <p>Copy from the challenge!</p>
  <p>Your puzzle answer should be <code>{result1}</code>.</p>

  <h2>--- Part Two ---</h2>
  <p>Copy from the challenge!</p>
  <p>Your puzzle answer should be <code>{result2}</code>.</p>
</article>
