<script>
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

  $: {
    if (input) {
      result1 = 0;
      result2 = 0;

      input.split("\n\n").forEach((group) => {
        let cdf = new CustomsDeclarationForm();

        group.split("\n").forEach((answer) => {
          cdf.addIndividualAnswer(answer);
        });

        result1 += cdf.countQuestions();
        result2 += cdf.countQuestionsAll();
      });
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
</article>
