<script>
  import ExpenseReport from "../lib/expense-report";

  let value = "";

  let twoSomeFirst, twoSomeSecond;
  let threeSomeFirst, threeSomeSecond, threeSomeThird;

  const expenseReport = new ExpenseReport();

  $: {
    expenseReport.load(value.split(" ").map(Number));

    [twoSomeFirst, twoSomeSecond] = expenseReport.findTwoThatSumTo(2020);
    [
      threeSomeFirst,
      threeSomeSecond,
      threeSomeThird,
    ] = expenseReport.findThreeThatSumTo(2020);
  }
</script>

<h2>Day1</h2>
<label for="input">Your expense report input..</label>
<input id="input" type="textarea" bind:value />

<h3>First Puzzle</h3>
<p>
  First number is
  {twoSomeFirst}, second number is
  {twoSomeSecond}. They times
  {twoSomeFirst * twoSomeSecond}
</p>

<h3>Second Puzzle</h3>
<p>
  First number is
  {threeSomeFirst}, second number is
  {threeSomeSecond}, third is
  {threeSomeThird}. They times
  {threeSomeFirst * threeSomeSecond * threeSomeThird}
</p>
