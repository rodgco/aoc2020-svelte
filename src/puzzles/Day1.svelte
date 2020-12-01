<script>
  import ExpenseReport from "../lib/expense_report";
  import data from "../input/day1.js";

  const expenseReport = new ExpenseReport(data);

  console.log(expenseReport);

  let threeSomeFirst, threeSomeSecond, threeSomeThird;
  [
    threeSomeFirst,
    threeSomeSecond,
    threeSomeThird,
  ] = expenseReport.findThreeThatSumTo(2020);

  let twoSomeFirst, twoSomeSecond;
  [twoSomeFirst, twoSomeSecond] = expenseReport.findTwoThatSumTo(2020);
</script>

<h2>Day1</h2>
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
