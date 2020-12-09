<script>
  import Performance from "../components/Performance.svelte";
  import CustomsDeclarationForm from "../lib/customs-declation-form";

  let input = `abc

a
b
c

ab
ac

a
a
a
a

b`;

  let result1;
  let result2;
  let t0, t1, t2, t3;

  $: {
    if (input) {
      t0 = performance.now(); //setup
      let list = input.split("\n\n").map((group) => {
        let cdf = new CustomsDeclarationForm();

        group.split("\n").forEach((answer) => {
          cdf.addIndividualAnswer(answer);
        });
        return cdf;
      });
      t1 = performance.now(); //puzzle #1
      result1 = list.reduce((acc, cdf) => acc + cdf.countQuestions(), 0);
      t2 = performance.now(); //puzzle #2
      result2 = list.reduce((acc, cdf) => acc + cdf.countQuestionsAll(), 0);
      t3 = performance.now(); //end of game
    }
  }
</script>

<article>
  <h2>--- Day 6: Custom Customs ---</h2>
  <p>
    Stayed awake and solved this one in 20min (2h20 AM), could have been faster
    but I tend to value a
    <em>good abstraction and code readability.</em>
  </p>
  <p>
    <s>This "empty line" as a record separator has appeared before (Passport
      Validation), and I'm not particularly happy on how I'm handling it, as I
      have duplicate code to process the last record outside of the main loop.
      Will fix that soon!</s>
  </p>
  <p>
    Fixed with
    <em>double line break split</em>
    or
    <code>split("\n\n")</code>. Code is cleaner!
  </p>

  <h2>Your input...</h2>
  <textarea wrap="off" cols="30" rows="5" bind:value={input} />

  <h2>--- Part One ---</h2>
  <p>
    For each group, count the number of questions to which anyone answered
    "yes".
    <em>What is the sum of those counts?</em>
  </p>
  <p>Your puzzle answer should be <code>{result1}</code>.</p>

  <h2>--- Part Two ---</h2>
  <p>
    For each group, count the number of questions to which
    <em>everyone</em>
    answered "yes".
    <em>What is the sum of those counts?</em>
  </p>
  <p>Your puzzle answer should be <code>{result2}</code>.</p>

  <Performance {t0} {t1} {t2} {t3} />
</article>
